import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  title: string;
  @Column({ nullable: false })
  description: string;
  @Column({ nullable: false })
  category: string;
  @Column({ nullable: false })
  userId: string;
  @Column({ nullable: false })
  completed: boolean;
  @Column({ nullable: false })
  dueDate: string;
}
