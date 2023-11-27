import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from './authentication/modules/authentication.module';
import { AppService } from './app.service';
import { CategoriesModule } from './category/modules/categories.module';
import { TasksModule } from './task/modules/tasks.module';

@Module({
  imports: [
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
    AuthenticationModule,
    CategoriesModule,
    TasksModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
