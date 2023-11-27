/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { v4 as uuid } from 'uuid';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthenticationService {
  private logger = new Logger('AuthService');
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async validatePassword(hashedPassword : string,password: string): Promise<boolean> {
    const done: boolean = await bcrypt.compare(password, hashedPassword);
    return done;
  }

  async register(user: RegisterDto): Promise<undefined> {
    const { username, email, password, gender } = user;

    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new HttpException(
        'A user has already exist',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const isUsernameExistALready = await this.userRepository.findOne({
        where: { username },
      });
      if(isUsernameExistALready){
        throw new HttpException(
          'username is already token',
          HttpStatus.BAD_REQUEST,
        );
      }
      try {
        const hashedPassword: string = await bcrypt.hash(password, 12);
        const hashedId: string = uuid();
        await this.userRepository.save({
          id: hashedId,
          username,
          gender,
          email,
          password: hashedPassword,
        });
      } catch (err) {
        throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
      }
    }
  }

  async login(
    user: LoginDto,
  ): Promise<{ token: string, userId: string } | undefined> {
    const { username, password } = user;
    const targetUser = await this.userRepository.findOne({
      where: { username },
    });
    if (targetUser) {
      const isPasswordCorrect : boolean = await this.validatePassword(targetUser.password , password);
      if(!isPasswordCorrect){
        throw new HttpException("Username or Password is Incorrect!",404);
      }
      const payload: JwtPayload = {
        id: targetUser.id,
      };
      const accessToken: string = await this.jwtService.sign(payload);
      this.logger.debug(
        `Successfully Generated JWT Token with payload ${JSON.stringify(
          payload,
        )}`,
      );
      return { token: accessToken, userId: targetUser.id };
    }else{
      throw new NotFoundException("User is not Exist");
    }
  }
}
