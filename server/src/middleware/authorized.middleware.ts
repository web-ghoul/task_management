import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { NextFunction, Request, Response } from 'express';
import { UserEntity } from 'src/authentication/entities/user.entity';
import { UsersRepository } from 'src/authentication/repositories/authentication.repository';

@Injectable()
export class Authorized implements NestMiddleware {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly usersRepository: UsersRepository,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token: string = req.headers.authorization.split(' ')[1];
      const user = await this.jwtService.verifyAsync(token);
      const isUserExist: UserEntity = await this.usersRepository.findOne({
        where: {
          id: user.id,
        },
      });
      if (!isUserExist) {
        res.status(404).json({ message: "User isn't Exist" });
      }
      req['userId'] = user.id;
    } catch (err) {
      res.status(401).json({ message: 'Unauthorized: Token not Provided' });
    }
    next();
  }
}
