import { Get, Controller } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CategoryEntity } from '../entities/category.entity';

@Controller()
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('categories')
  async getAll(): Promise<CategoryEntity[] | undefined> {
    const categories = await this.categoriesService.getAll();
    return categories;
  }
}
