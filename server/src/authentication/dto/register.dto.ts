import { IsEmail, IsString, IsStrongPassword, Length } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Length(3, 20, {
    message: 'Username must be at least 3 and at most 20 characters',
  })
  readonly username: string;
  @IsEmail()
  readonly email: string;
  @IsStrongPassword()
  readonly password: string;
  @IsString()
  readonly gender: string;
}
