import { Controller, Get, Post, Body, Param, Request, Patch, UseGuards, Delete, Header, Res } from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { RegisterService } from './register.service';
import { CreateRegisDto } from './dto/create-register.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PatchRegisDto } from './dto/patch-register.dto';

import { RealIP } from 'nestjs-real-ip';


@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService,private httpService: HttpService,) {}

  @Post()
  async CreateRegister(@Body() CreateDto: CreateRegisDto,@RealIP() ip: string) {
    return this.registerService.createRegis(CreateDto,ip);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  async UpdateRegister(@Body() CreateDto: PatchRegisDto  ,@Request() req) {
    return this.registerService.UpdateRegis(CreateDto,req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post("/addsoftskill")
  async Addsoftskill(@Body() CreateDto: PatchRegisDto ,@Request() req) {
    return this.registerService.Newaddskill(CreateDto,req.user.userId);
  }
  @UseGuards(JwtAuthGuard)
  @Post("/addcertificate")
  async Addcertificate(@Body() CreateDto: PatchRegisDto ,@Request() req) {
    return this.registerService.Newcertificate(CreateDto,req.user.userId);
  }
  @UseGuards(JwtAuthGuard)
  @Post("/addeducationHistory")
  async AddeducationHistory(@Body() CreateDto: PatchRegisDto ,@Request() req) {
    return this.registerService.NeweducationHistory(CreateDto,req.user.userId);
  }
  @UseGuards(JwtAuthGuard)
  @Post("/addworkHistory")
  async AddworkHistory(@Body() CreateDto: PatchRegisDto ,@Request() req) {
    return this.registerService.NewworkHistory(CreateDto,req.user.userId);
  }
  @UseGuards(JwtAuthGuard)
  @Post("/addinterestedJob")
  async AddinterestedJob(@Body() CreateDto: PatchRegisDto ,@Request() req,@RealIP() ip: string) {
    return this.registerService.NewinterestedJob(CreateDto,req.user.userId,ip);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async DeleteRegister(@Request() req) {
    return this.registerService.DeleteRegis(req.user.userId);
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

  @Get(':type/hardskill')
  async findHardSkill(@Param('type') type: string)
  {
    return this.registerService.findHardSkill(type);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("additionalSkill/:id")
  async UpdateAdditionalSkill(@Body() CreateDto: PatchRegisDto  ,@Request() req,@Param('id') id: string) {
    return this.registerService.UpdateAdditionalSkill(CreateDto,req.user.userId,id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("additionalSkill/:id")
  async DeleteAdditionalSkill(@Request() req,@Param('id') id: string) {
    return this.registerService.DeleteAdditionalSkill(req.user.userId,id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("certificate/:id")
  async UpdateCertificate(@Body() CreateDto: PatchRegisDto  ,@Request() req,@Param('id') id: string) {
    return this.registerService.UpdateCertificate(CreateDto,req.user.userId,id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("certificate/:id")
  async DeleteCertificate(@Request() req,@Param('id') id: string) {
    return this.registerService.DeleteCertificate(req.user.userId,id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("educationHistory/:id")
  async UpdateEducationHistory(@Body() CreateDto: PatchRegisDto  ,@Request() req,@Param('id') id: string) {
    return this.registerService.UpdateEducationHistory(CreateDto,req.user.userId,id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("educationHistory/:id")
  async DeleteEducationHistory(@Request() req,@Param('id') id: string) {
    return this.registerService.DeleteEducationHistory(req.user.userId,id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("workHistory/:id")
  async UpdateWorkHistory(@Body() CreateDto: PatchRegisDto  ,@Request() req,@Param('id') id: string) {
    return this.registerService.UpdateWorkHistory(CreateDto,req.user.userId,id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("workHistory/:id")
  async DeleteWorkHistory(@Request() req,@Param('id') id: string) {
    return this.registerService.DeleteWorkHistory(req.user.userId,id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("interestedJob/:id")
  async UpdateInterestedJob(@Body() CreateDto: PatchRegisDto  ,@Request() req,@Param('id') id: string) {
    return this.registerService.UpdateInterestedJob(CreateDto,req.user.userId,id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("interestedJob/:id")
  async DeleteInterestedJob(@Request() req,@Param('id') id: string) {
    return this.registerService.DeleteInterestedJob(req.user.userId,id);
  }

  
  @UseGuards(JwtAuthGuard)
  @Get("getinfo")
  async GetInfo(@Request() req) {
    return this.registerService.GetInfo(req.user.userId);
  }
  //*/


  /*@Get('/random')
  //@Header('Content-Type', 'image/jpeg')
  async RandomRegis()
  {
    const respone = await this.httpService.get('https://hilight.kapook.com/img_cms2/user/juthamat/jutha03/3_28.jpg').toPromise();
    //console.log(Buffer.from(respone.data, 'binary').toString('base64',))
    // console.log(respone.headers)
    //console.log(respone.config)
    return Buffer.from(respone.data, 'binary').toString('base64');
    //return respone.data;

    //console.log(respone.data)
    //const encode = (str: string):string => Buffer.from(str, 'binary').toString('base64');
    //console.log(encode(respone.data));
    //return encode(respone.data).slice(0, 20);
    
  }*/
}
