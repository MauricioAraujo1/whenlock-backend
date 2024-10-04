// src/domain/entities/user.entity.ts
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  registration: string;  // Inclua este campo

  @ApiProperty()
  password: string;

  constructor(id: string, name: string, email: string, registration: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.registration = registration;  // Inclua no construtor
    this.password = password;
  }
}
