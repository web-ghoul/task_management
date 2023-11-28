import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from '../entities/task.entity';
import { TaskDto } from '../dto/task.dto';
import { TasksRepository } from '../repositories/tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly tasksRepository: TasksRepository,
  ) {}

  async getAll(
    userId: string,
    query: { category: string } | undefined,
  ): Promise<TaskEntity[]> {
    const whereClause: { userId: string; category?: string } = { userId };
    if (query && query.category) {
      whereClause.category = query.category;
    }
    const allTasks = await this.tasksRepository.find({
      where: whereClause,
      order: { completed: 'DESC' },
    });
    return allTasks.reverse();
  }

  async addTask(task: TaskDto): Promise<undefined> {
    const { title } = task;
    const isTaskExist: TaskEntity = await this.tasksRepository.findOne({
      where: { title },
    });
    if (isTaskExist) {
      throw new HttpException(
        'Title is already Exist!!',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      await this.tasksRepository.save(task);
    }
  }

  async updateTask(task: TaskDto, taskId: number): Promise<undefined> {
    const isTaskExist: TaskEntity = await this.tasksRepository.findOne({
      where: { id: taskId },
    });
    if (!isTaskExist) {
      throw new HttpException("Task isn't Exist!!", HttpStatus.BAD_REQUEST);
    } else {
      await this.tasksRepository.update(taskId, task);
    }
  }

  async deleteTask(taskId: number): Promise<undefined> {
    const isTaskExist: TaskEntity = await this.tasksRepository.findOne({
      where: { id: taskId },
    });
    if (!isTaskExist) {
      throw new HttpException("Task isn't Exist!!", HttpStatus.BAD_REQUEST);
    } else {
      await this.tasksRepository.delete({ id: taskId });
    }
  }

  async completedTask(userId: string, taskId: number): Promise<undefined> {
    const isTaskExist: TaskEntity = await this.tasksRepository.findOne({
      where: { id: taskId },
    });
    if (!isTaskExist) {
      throw new HttpException("Task isn't Exist!!", HttpStatus.BAD_REQUEST);
    } else {
      await this.tasksRepository.update(taskId, { completed: true });
    }
  }

  async notCompletedTask(userId: string, taskId: number): Promise<undefined> {
    const isTaskExist: TaskEntity = await this.tasksRepository.findOne({
      where: { id: taskId },
    });
    if (!isTaskExist) {
      throw new HttpException("Task isn't Exist!!", HttpStatus.BAD_REQUEST);
    } else {
      await this.tasksRepository.update(taskId, { completed: false });
    }
  }
}
