import { Controller, Get, Post, Put, Delete, Param, Body, BadRequestException } from '@nestjs/common';
import { UserService } from '../../app/services/user.service';
import { CreateUserDto } from '../../app/dto/create-user.dto';
import { UpdateUserDto } from '../../app/dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from '../../domain/entities/user.entity';

@ApiTags('users')  // Categoriza os endpoints no Swagger
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.', type: User })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    // Verifica se algum campo obrigatório está vazio
    if (!createUserDto.name || !createUserDto.email || !createUserDto.registration || !createUserDto.password) {
      throw new BadRequestException('Todos os campos são obrigatórios.');
    }

    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários.', type: [User] })
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Busca um usuário por ID' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado.', type: User })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualiza um usuário por ID' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.', type: User })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Deleta um usuário por ID' })
  @ApiResponse({ status: 200, description: 'Usuário deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
