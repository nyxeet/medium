import { Module } from '@nestjs/common';
import { UserController } from './user.contoller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, AuthGuard],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
