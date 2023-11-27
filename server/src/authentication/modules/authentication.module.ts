import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationController } from '../controllers/authentication.controller';
import { UserEntity } from '../entities/user.entity';
import { JwtGuard } from '../guards/jwt.guard';
import { JwtStrategy } from '../guards/jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '3600s' },
      }),
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [AuthenticationService, JwtGuard, JwtStrategy],
  controllers: [AuthenticationController],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
