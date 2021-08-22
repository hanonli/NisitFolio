import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, UseGuards, UploadedFile } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Express } from 'express'

import Account from './account.entity';
import Userinfo from './userinfo.entity';

import { RegisterService } from './register.service';
import { ParseObjectIdPipe } from '../common/pipes';

import { CreateAccountDto } from './dto/create-account.dto';
import { CreateUserinfoDto } from './dto/create-userinfo.dto';
import { CreateDto } from './dto/create.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Get()
  async findAll(): Promise<Account[]> {
    return this.registerService.findAll();
  }

  //@UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createDto: CreateDto) {
    return this.registerService.create(createDto);
  }

  @Get(':accountD/reviews')
  async findAllReviews(@Param('accountD', ParseObjectIdPipe) accountD: ObjectId): Promise<CreateUserinfoDto[]> {
    return this.registerService.findAllReviews(accountD);
  }

  //@UseGuards(JwtAuthGuard)
  @Post(':accountD/reviews')
  async createReview(@Param('accountD', ParseObjectIdPipe) accountD: ObjectId,
                     @Body() createUserinfoDto: CreateUserinfoDto) {
    createUserinfoDto.accountD = accountD;
    return this.registerService.createReview(createUserinfoDto);
  }
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
