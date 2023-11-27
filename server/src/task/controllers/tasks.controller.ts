import {
  Get,
  Controller,
  Post,
  Body,
  HttpException,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { TaskEntity } from '../entities/task.entity';
import { TaskDto } from '../dto/task.dto';

@Controller()
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('tasks/:userId')
  async getAll(@Param() params): Promise<TaskEntity[] | undefined> {
    const categories = await this.tasksService.getAll(params.userId);
    return categories;
  }

  @Post('addTask')
  async AddTask(@Body() task: TaskDto): Promise<undefined> {
    await this.tasksService.addTask(task);
  }

  @Patch('updateTask')
  async updateTask(@Body() task: TaskEntity): Promise<undefined> {
    await this.tasksService.updateTask(task);
  }

  @Delete('deleteTask')
  async deleteTask(@Body() taskId: number): Promise<undefined> {
    try {
      await this.tasksService.deleteTask(taskId);
    } catch (err) {
      throw new HttpException('Server Error', 500);
    }
  }
}
