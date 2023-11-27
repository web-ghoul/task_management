import { Repository } from 'typeorm/repository/Repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class CategoriesRepository extends Repository<CategoryEntity> {
  constructor(private dataSource: DataSource) {
    super(CategoryEntity, dataSource.createEntityManager());
  }
}
