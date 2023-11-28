import { IsBoolean, IsString } from 'class-validator';

export class TaskDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly description: string;
  @IsBoolean()
  readonly completed: boolean;
  @IsString()
  readonly category: string;
  @IsString()
  readonly userId: string;
  @IsString()
  readonly dueDate: string;
}
