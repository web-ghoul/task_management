import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Categories')
export class CategoryEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  title: string;
}
