import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from '../entities/task.entity';
import { TaskDto } from '../dto/task.dto';
import { UserEntity } from '../../authentication/entities/user.entity';
import { TasksRepository } from '../repositories/tasks.repository';
import { UsersRepository } from 'src/authentication/repositories/authentication.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly tasksRepository: TasksRepository,
    @InjectRepository(UserEntity)
    private readonly usersRepository: UsersRepository,
  ) {}

  async isUserExist(userId: string): Promise<boolean> {
    const isExist: UserEntity = await this.usersRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (isExist) {
      return true;
    }
    return false;
  }

  async getAll(userId: string): Promise<TaskEntity[]> {
    const isUserExist = await this.isUserExist(userId);
    if (!isUserExist) {
      throw new HttpException("User isn't Exist!!", HttpStatus.BAD_REQUEST);
    }
    const allTasks = await this.tasksRepository.find({ where: { userId } });
    return allTasks;
  }

  async addTask(task: TaskDto): Promise<undefined> {
    const { title, userId } = task;
    const isUserExist = await this.isUserExist(userId);
    if (!isUserExist) {
      throw new HttpException("User isn't  Exist!!", HttpStatus.BAD_REQUEST);
    }
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

  async updateTask(task: TaskEntity): Promise<undefined> {
    const { id, userId } = task;
    const isUserExist = await this.isUserExist(userId);
    if (!isUserExist) {
      throw new HttpException("User isn't  Exist!!", HttpStatus.BAD_REQUEST);
    }
    const isTaskExist: TaskEntity = await this.tasksRepository.findOne({
      where: { id },
    });
    if (isTaskExist) {
      throw new HttpException('Task is Exist!!', HttpStatus.BAD_REQUEST);
    } else {
      await this.tasksRepository.update({ id }, task);
    }
  }

  async deleteTask(taskId: number): Promise<undefined> {
    console.log(taskId);
  }
}
