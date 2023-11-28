import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private authService: UserService) {}

  @Get('/')
  async getUser(@Req() req): Promise<UserDto | undefined> {
    return await this.authService.getUser(req.userId);
  }
}
