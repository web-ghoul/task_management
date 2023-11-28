import {
  Get,
  Controller,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Req,
  Query,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { TaskEntity } from '../entities/task.entity';
import { TaskDto } from '../dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  async getAll(@Req() req, @Query() query): Promise<TaskEntity[] | undefined> {
    const categories = await this.tasksService.getAll(req.userId, query);
    return categories;
  }

  @Post('addTask')
  async AddTask(@Body() task: TaskDto): Promise<undefined> {
    await this.tasksService.addTask(task);
  }

  @Put('updateTask/:taskId')
  async updateTask(@Body() task: TaskDto, @Param() param): Promise<undefined> {
    await this.tasksService.updateTask(task, param.taskId);
  }

  @Delete('deleteTask/:taskId')
  async deleteTask(@Param() param): Promise<undefined> {
    await this.tasksService.deleteTask(param.taskId);
  }

  @Put('completedTask/:taskId')
  async completedTask(@Req() req, @Param() param): Promise<undefined> {
    await this.tasksService.completedTask(req.userId, param.taskId);
  }

  @Put('notCompletedTask/:taskId')
  async notCompletedTask(@Req() req, @Param() param): Promise<undefined> {
    await this.tasksService.notCompletedTask(req.userId, param.taskId);
  }
}
