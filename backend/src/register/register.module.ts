import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

import Account from './account.entity';
import Userinfo from './userinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account, Userinfo])],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}