import { IsEmail, IsString, Length } from 'class-validator';

export class UserDto {
  @IsString()
  @Length(3, 20, {
    message: 'Username must be at least 3 and at most 20 characters',
  })
  readonly username: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly gender: string;
}
