import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from '../entities/task.entity';
import { TasksService } from '../services/tasks.service';
import { TasksController } from '../controllers/tasks.controller';
import { UsersRepository } from 'src/authentication/repositories/authentication.repository';
import { TasksRepository } from '../repositories/tasks.repository';
import { UserEntity } from 'src/authentication/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, UserEntity])],
  providers: [TasksService, TasksRepository, UsersRepository],
  controllers: [TasksController],
  exports: [TasksService],
})
export class TasksModule {}
