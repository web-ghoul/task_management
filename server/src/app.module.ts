import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from './authentication/modules/authentication.module';
import { AppService } from './app.service';
import { CategoriesModule } from './category/modules/categories.module';
import { TasksModule } from './task/modules/tasks.module';
import { Authorized } from './middleware/authorized.middleware';
import { JwtGuard } from './authentication/guards/jwt.guard';
import { JwtStrategy } from './authentication/guards/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UsersRepository } from './authentication/repositories/authentication.repository';
import { UserEntity } from './authentication/entities/user.entity';
import { UserModule } from './user/modules/user.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '24h' },
      }),
    }),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.local.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
    AuthenticationModule,
    CategoriesModule,
    TasksModule,
    UserModule,
  ],
  providers: [AppService, Authorized, JwtGuard, JwtStrategy, UsersRepository],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Authorized).forRoutes('tasks', 'user');
  }
}
