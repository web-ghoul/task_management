import { IsString, IsStrongPassword, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @Length(3, 20, {
    message: 'Username must be at least 3 and at most 20 characters',
  })
  readonly username: string;
  @IsStrongPassword()
  readonly password: string;
}
