/* eslint-disable prettier/prettier */
import {
    Injectable
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../dto/user.dto';
import { UserEntity } from 'src/authentication/entities/user.entity';
  
@Injectable()
export class UserService {
constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
) {}
    async getUser(userId:string): Promise<UserDto | undefined> {
        return await this.userRepository.findOne({where:{id:userId}})
    }
}
  