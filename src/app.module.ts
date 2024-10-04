import { Module } from '@nestjs/common';
import { UserController } from './infra/controllers/user.controller';
import { UserService } from './app/services/user.service';
import { PrismaService } from './infra/prisma/prisma.service';
import { PrismaUserRepository } from './infra/repositories/prisma-user.repository'; // Importação do repositório

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, PrismaUserRepository], // Adicione aqui
})
export class AppModule {}
