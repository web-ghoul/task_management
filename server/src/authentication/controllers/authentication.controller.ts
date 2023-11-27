import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { AuthenticationService } from '../services/authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Post('register')
  async register(@Body() user: RegisterDto) {
    await this.authService.register(user);
  }

  @Post('login')
  async login(
    @Body() user: LoginDto,
  ): Promise<{ token: string; userId: string } | undefined> {
    const data: { token: string; userId: string } | undefined =
      await this.authService.login(user);
    return data;
  }
}
