import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from '../user/guards/auth.guard';
import { UserEntity } from '@app/user/user.entity';
import { FollowEntity } from './follow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FollowEntity])],
  providers: [ProfileService, AuthGuard],
  controllers: [ProfileController],
  exports: [ProfileService],
})
export class ProfileModule {}
