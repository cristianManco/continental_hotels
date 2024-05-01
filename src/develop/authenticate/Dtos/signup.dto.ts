import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8, { message: 'password should be minimum 8' })
  @MaxLength(50, { message: 'password should be maximum 50' })
  password: string;

  // Se añade el campo "name" correspondiente a la entidad "admins"
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  // Se añade el campo "role" correspondiente a la entidad "admins"
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  role: string;
}
