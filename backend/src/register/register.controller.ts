import { Controller, Delete, Get, Put, Post, Body, HttpException, HttpStatus, Param, UseGuards, UploadedFile } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Express } from 'express'
import { ParseObjectIdPipe } from '../common/pipes';
<<<<<<< HEAD

import './dto/create-account.dto';
import { CreateUserinfoDto } from './dto/create-userinfo.dto';
import { CreateDto, CreateDtoSe,CreateDto4,CreateDto5 } from './dto/create.dto';
=======
>>>>>>> cc62a96d4c1d2ba5aa7be0f0560291ce4085979b
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeleteResult } from 'typeorm';
<<<<<<< HEAD
import { CreateAccountDto } from './dto/create-account.dto';
import { PostAccount, PostUserinfo } from './register.entity';
import EducationHistory from './entity/EducationHistory.entity';
import WorkHistory from './entity/WorkHistory.entity';
import { userjobskills } from './entity/UserJobSkill.entity';
import { AdditionalSkill } from './entity/AdditionalSkill.entity';

//--------------------------------------no1
=======

import { RegisterService } from './register.service';
import { CreateRegisDto } from './dto/create-register.dto';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory} from './entity/Register.entity'





>>>>>>> cc62a96d4c1d2ba5aa7be0f0560291ce4085979b

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}
<<<<<<< HEAD

=======
  /*@Post('otest')
  async otest(@Body() otest: otest) {
    return this.registerService.otest(otest);
  }*/
  

  //-------------------------------TRUE
  @Post()
  async CreateRegister(@Body() CreateDto: CreateRegisDto ) {
    return this.registerService.createRegis(CreateDto);
  }
  ///*
  //----------------------------ENDTRUE
  //-----------------------------subfindAllDDC
  
  @Get('/country')
  async findCountry()
  {
    return this.registerService.findCountry();
  }

  @Get(':country/province')
  async findProvince(@Param('country') country: string)
  {
    return this.registerService.findProvince(country);
  }
  
  @Get(':province/city')
  async findCity(@Param('province') province: string)
  {
    return this.registerService.findCity(province);
  }

  @Get('/jobtitle')
  async findJobTitle()
  {
    return this.registerService.findJobTitle();
  }

  @Get(':jobtitle/skill')
  async findSkill(@Param('jobtitle') jobtitle: string)
  {
    return this.registerService.findSkill(jobtitle);
  }


  /*@Get('DDC')
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
  }*/
  
  
  //------------------------------endsub
  /*
>>>>>>> cc62a96d4c1d2ba5aa7be0f0560291ce4085979b
  @Get()
  async findAll(): Promise<Account[]> {
    return this.registerService.findAll();
  }*/

  //@UseGuards(JwtAuthGuard)
  /*
  @Post()
  async create(@Body() createDto: CreateDto) {
    return this.registerService.create(createDto);
  }//*/

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

<<<<<<< HEAD
=======
  /*//-----------------------Account---------------------------------//
>>>>>>> cc62a96d4c1d2ba5aa7be0f0560291ce4085979b
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
    /*
    return (await this.registerService.findOneUserinfo(Email)).Firstname,(await this.registerService.findOneUserinfo(Email)).Lastname;
    */
  }
  ///no2///
  
  @Post(':Email/userInfo')
  async createuserInfo(@Param('Email') Email: string,@Body() CreateDtoSe: CreateDtoSe) {
    return this.registerService.createSe(Email,CreateDtoSe);
  }
  
  @Get(':Email/userInfo')
  async findOneSee(@Param('Email') Email: string): Promise<CreateDtoSe> {
    return this.registerService.findOneSee(Email);
  }
  
  @Put(':Email/userInfo') // PUT /email/Account
  async updateSe(@Param('Email') Email: string,@Body() CreateDtoSe: CreateDtoSe) {
    return await this.registerService.createOrUpdate2(Email,CreateDtoSe);
  }
  //*/
  //-----------------------no3---------------------------------//
  @Post(':Email/ED')
  async createuser3(@Param('Email') Email: string,@Body() CreateDto3: EducationHistory) {
    return this.registerService.create3(Email,CreateDto3);
  }
  
  @Get(':Email/ED')
  async findOne3(@Param('Email') Email: string): Promise<EducationHistory> {
    return this.registerService.findOne3(Email);
  }
  
  @Put(':Email/ED') // PUT /email/Account
  async update3(@Param('Email') Email: string,@Body() CreateDto3: EducationHistory) {
    return await this.registerService.createOrUpdate3(Email,CreateDto3);
  }
  //-----------------------no4---------------------------------//
  @Post(':Email/WH')
  async createuser4(@Param('Email') Email: string,@Body() CreateDto4: CreateDto4) {
    return this.registerService.create4(Email,CreateDto4);
  }
  
  @Get(':Email/WH')
  async findOne4(@Param('Email') Email: string): Promise<CreateDto4> {
    return this.registerService.findOne4(Email);
  }
  
  @Put(':Email/WH') // PUT /email/Account
  async update4(@Param('Email') Email: string,@Body() CreateDto4: CreateDto4) {
    return await this.registerService.createOrUpdate4(Email,CreateDto4);
  }
  //-----------------------no5---------------------------------//
  @Post(':Email/RE')
  async createuser5(@Param('Email') Email: string,@Body() CreateDto5: CreateDto5) {
    return this.registerService.create5(Email,CreateDto5);
  }
  
  @Get(':Email/RE')
  async findOne5(@Param('Email') Email: string): Promise<CreateDto5> {
    return this.registerService.findOne5(Email);
  }
  
  @Put(':Email/RE') // PUT /email/Account
  async update5(@Param('Email') Email: string,@Body() CreateDto5: CreateDto5) {
    return await this.registerService.createOrUpdate5(Email,CreateDto5);
  }
  //-----------------------no6---------------------------------//
  @Post(':Email/UJF')
  async createuser6(@Param('Email') Email: string,@Body() CreateDto6: userjobskills) {
    return this.registerService.create6(Email,CreateDto6);
  }
  
  @Get(':Email/UJF')
  async findOne6(@Param('Email') Email: string): Promise<userjobskills> {
    return this.registerService.findOne6(Email);
  }
  
  @Put(':Email/UJF') // PUT /email/Account
  async update6(@Param('Email') Email: string,@Body() CreateDto6: userjobskills) {
    return await this.registerService.createOrUpdate6(Email,CreateDto6);
  }
  //-----------------------no7---------------------------------//
  @Post(':Email/ADS')
  async createuser7(@Param('Email') Email: string,@Body() CreateDto6: AdditionalSkill) {
    return this.registerService.create7(Email,CreateDto6);
  }
  
  @Get(':Email/ADS')
  async findOne7(@Param('Email') Email: string): Promise<AdditionalSkill> {
    return this.registerService.findOne7(Email);
  }
  
  @Put(':Email/ADS') // PUT /email/Account
  async update7(@Param('Email') Email: string,@Body() CreateDto6: AdditionalSkill) {
    return await this.registerService.createOrUpdate7(Email,CreateDto6);
  }
  //----------------------no12------------------//
  @Post('/uf1')
  async createuser12(@Param('Email') Email: string,@Body() CreateDto: CreateDto) {
    return this.registerService.create12(CreateDto);
  }
  
  @Get(':Email/uf1')
  async findOne12(@Param('Email') Email: string): Promise<CreateDto> {
    return this.registerService.findOne12(Email);
  }
  
  @Put(':Email/uf1') // PUT /email/Account
  async update12(@Param('Email') Email: string,@Body() CreateDto: CreateDto) {
    return await this.registerService.createOrUpdate12(Email,CreateDto);
  }
  //------------------------------error
  @Get(':Email/userInfo')
<<<<<<< HEAD
  async findOneSeet(@Param('Email') Email: string): Promise<CreateDtoSe> {
    return this.registerService.findOneSee(Email);
  }
=======
  async findOneSeet(@Param('Email') Email: string): Promise<CreateDto2> {
    return this.registerService.findOne2(Email);
  }*/

>>>>>>> cc62a96d4c1d2ba5aa7be0f0560291ce4085979b
}
