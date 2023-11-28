import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../../authentication/repositories/authentication.repository';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { Module } from '@nestjs/common';
import { UserEntity } from 'src/authentication/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UsersRepository],
  controllers: [UserController],
})
export class UserModule {}
