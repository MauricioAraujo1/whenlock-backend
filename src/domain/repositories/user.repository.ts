// src/domain/repositories/user.repository.ts
import { CreateUserDto } from '../../app/dto/create-user.dto';
import { UpdateUserDto } from '../../app/dto/update-user.dto';
import { User } from '../entities/user.entity';

export interface UserRepository {
  create(createUserDto: CreateUserDto): Promise<User>;  // Altere para usar CreateUserDto
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User | null>;
  update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
  delete(id: string): Promise<void>;
}
