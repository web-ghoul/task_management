import { Repository } from 'typeorm/repository/Repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';

@Injectable()
export class TasksRepository extends Repository<TaskEntity> {
  constructor(private dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }
}
