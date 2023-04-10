import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  readonly username: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsNotEmpty()
  readonly bio: string;

  @IsOptional()
  @IsNotEmpty()
  readonly image: string;
}
