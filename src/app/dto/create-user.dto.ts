import { IsString, IsEmail, Matches, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString({ message: 'O nome deve ser uma string.' })
  @Matches(/^[a-zA-Z\s]+$/, { message: 'Nome deve conter apenas letras.' })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  name: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail({}, { message: 'O email deve ser válido.' })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  email: string;

  @ApiProperty({ example: '123456' })
  @Matches(/^\d+$/, { message: 'A matrícula deve conter apenas números.' })
  @IsNotEmpty({ message: 'A matrícula é obrigatória.' })
  registration: string; // Certifique-se de que este campo está aqui

  @ApiProperty({ example: 'abc123' })
  @Matches(/^[a-zA-Z0-9]{6}$/, { message: 'A senha deve ser alfanumérica e ter exatamente 6 caracteres.' })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  password: string;
}
