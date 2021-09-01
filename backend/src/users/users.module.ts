import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserReq  from './user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserReq ])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
