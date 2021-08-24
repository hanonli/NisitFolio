import { Controller, Delete, Get, Put, Post, Body, HttpException, HttpStatus, Param, UseGuards, UploadedFile } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Express } from 'express'

import Account from './account.entity';
import Userinfo from './userinfo.entity';

import { RegisterService } from './register.service';
import { ParseObjectIdPipe } from '../common/pipes';

import { CreateAccountDto } from './dto/create-account.dto';
import { CreateUserinfoDto } from './dto/create-userinfo.dto';
import { CreateDto1,CreateDto2,CreateDto3,CreateDto4,CreateDto5,CreateDto6,CreateDto7, CreateDtoTRUE } from './dto/create.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { DeleteResult } from 'typeorm';
import { PostAccount, PostUserinfo } from './register.entity';

import EducationHistory from './entity/EducationHistory.entity';
import WorkHistory from './entity/WorkHistory.entity';
import userjobskills  from './entity/UserJobSkill.entity';
import AdditionalSkill  from './entity/AdditionalSkill.entity';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  //-------------------------------TRUE
  @Post()
  async TRUECREATE(@Body() CreateDto: CreateDtoTRUE) {
    return this.registerService.createTRUE(CreateDto);
  }
  //----------------------------ENDTRUE
  //-----------------------------subfindAllDDC
  @Get('DDC')
  async findAllDDC(){
    return this.registerService.findAllDDC();
  }
  @Get(':C/DDP')
  async findAllDDP(@Param('Email') C: string){
    return this.registerService.findAllDDP(C);
  }
  @Get(':P/DDCity')
  async findAllDDCity(@Param('Email') P: string){
    return this.registerService.findAllDDCity(P);
  }
  @Get('/DDHS')
  async findAllDDHS(){
    return this.registerService.findAllDDHS();
  }
  @Get(':JS/DDJS')
  async findAllJS(@Param('JS') JS: string){
    return this.registerService.findAllDDJS(JS);
  }
  //------------------------------endsub

  @Get()
  async findAll(): Promise<Account[]> {
    return this.registerService.findAll();
  }

  //@UseGuards(JwtAuthGuard)
  /*
  @Post()
  async create(@Body() createDto: CreateDto1) {
    return this.registerService.create(createDto);
  }
  */
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  //-----------------------Account---------------------------------//
  @Put(':Email/Account') // PUT /email/Account
  async updatee(@Param('Email') Email: string,@Body() createAccountDto: CreateAccountDto,): Promise<Account> {
    const x = await this.registerService.findOne(Email);
    x.Password=createAccountDto.Password;
    x.Privacy=createAccountDto.Privacy;
    x.ProfilePic=createAccountDto.ProfilePic;
    return await this.registerService.createOrUpdate(x);
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    const x = await this.registerService.findOne(id);
    return this.registerService.remove(x);
  }
  @Get(':Email')
  async findOnetest(@Param('Email') Email: string) {
    return (await this.registerService.findOneUserinfo(Email));
  }

  //-----------------------userInfo---------------------------------//
  @Post(':Email/userInfo')
  async createuserInfo(@Param('Email') Email: string,@Body() CreateDto2: CreateDto2) {
    return this.registerService.create2(Email,CreateDto2);
  }
  
  @Get(':Email/userInfo')
  async findOneSee(@Param('Email') Email: string): Promise<CreateDto2> {
    return this.registerService.findOne2(Email);
  }
  
  @Put(':Email/userInfo') 
  async updateSe(@Param('Email') Email: string,@Body() CreateDto2: CreateDto2) {
    return await this.registerService.createOrUpdate2(Email,CreateDto2);
  }

  //-----------------------Education---------------------------------//
  @Post(':Email/ED')
  async createuser3(@Param('Email') Email: string,@Body() CreateDto3: EducationHistory) {
    return this.registerService.create3(Email,CreateDto3);
  }
  
  @Get(':Email/ED')
  async findOne3(@Param('Email') Email: string): Promise<EducationHistory> {
    return this.registerService.findOne3(Email);
  }
  
  @Put(':Email/ED') 
  async update3(@Param('Email') Email: string,@Body() CreateDto3: EducationHistory) {
    return await this.registerService.createOrUpdate3(Email,CreateDto3);
  }

  //-----------------------workhistory---------------------------------//
  @Post(':Email/WH')
  async createuser4(@Param('Email') Email: string,@Body() CreateDto4: CreateDto4) {
    return this.registerService.create4(Email,CreateDto4);
  }

  @Get(':Email/WH')
  async findOne4(@Param('Email') Email: string): Promise<CreateDto4> {
    return this.registerService.findOne4(Email);
  }

  @Put(':Email/WH') 
  async update4(@Param('Email') Email: string,@Body() CreateDto4: CreateDto4) {
    return await this.registerService.createOrUpdate4(Email,CreateDto4);
  }

  //-----------------------Resume---------------------------------//
  @Post(':Email/RE')
  async createuser5(@Param('Email') Email: string,@Body() CreateDto5: CreateDto5) {
    return this.registerService.create5(Email,CreateDto5);
  }
  
  @Get(':Email/RE')
  async findOne5(@Param('Email') Email: string): Promise<CreateDto5> {
    return this.registerService.findOne5(Email);
  }
  
  @Put(':Email/RE')
  async update5(@Param('Email') Email: string,@Body() CreateDto5: CreateDto5) {
    return await this.registerService.createOrUpdate5(Email,CreateDto5);
  }

  //-----------------------userjobskills---------------------------------//
  @Post(':Email/UJF')
  async createuser6(@Param('Email') Email: string,@Body() CreateDto6: userjobskills) {
    return this.registerService.create6(Email,CreateDto6);
  }
  
  @Get(':Email/UJF')
  async findOne6(@Param('Email') Email: string): Promise<userjobskills> {
    return this.registerService.findOne6(Email);
  }
  
  @Put(':Email/UJF') 
  async update6(@Param('Email') Email: string,@Body() CreateDto6: userjobskills) {
    return await this.registerService.createOrUpdate6(Email,CreateDto6);
  }

  //-----------------------AdditionalSkill---------------------------------//
  @Post(':Email/ADS')
  async createuser7(@Param('Email') Email: string,@Body() CreateDto6: AdditionalSkill) {
    return this.registerService.create7(Email,CreateDto6);
  }
  
  @Get(':Email/ADS')
  async findOne7(@Param('Email') Email: string): Promise<AdditionalSkill> {
    return this.registerService.findOne7(Email);
  }
  
  @Put(':Email/ADS') 
  async update7(@Param('Email') Email: string,@Body() CreateDto6: AdditionalSkill) {
    return await this.registerService.createOrUpdate7(Email,CreateDto6);
  }
  //----------------------no12------------------//
  @Post('/uf1')
  async createuser12(@Param('Email') Email: string,@Body() CreateDto: CreateDto1) {
    return this.registerService.create12(CreateDto);
  }
  
  @Get(':Email/uf1')
  async findOne12(@Param('Email') Email: string): Promise<CreateDto1> {
    return this.registerService.findOne12(Email);
  }
  
  @Put(':Email/uf1') 
  async update12(@Param('Email') Email: string,@Body() CreateDto: CreateDto1) {
    return await this.registerService.createOrUpdate12(Email,CreateDto);
  }
  //------------------------------error
  @Get(':Email/userInfo')
  async findOneSeet(@Param('Email') Email: string): Promise<CreateDto2> {
    return this.registerService.findOne2(Email);
  }

}
