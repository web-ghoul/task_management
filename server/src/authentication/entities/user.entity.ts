import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Users')
export class UserEntity {
  @PrimaryColumn({ nullable: false })
  id: string;
  @Column({ nullable: false, default: 'male' })
  gender: string;
  @Column({ nullable: false })
  username: string;
  @Column({ nullable: false, unique: true })
  email: string;
  @Column({ nullable: false })
  password: string;
}
