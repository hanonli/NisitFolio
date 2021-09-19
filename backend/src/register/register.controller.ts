import { Controller, Get, Post, Body, Param, Request, Patch, UseGuards, Delete } from '@nestjs/common';

import { RegisterService } from './register.service';
import { CreateRegisDto } from './dto/create-register.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PatchRegisDto } from './dto/patch-register.dto';


@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async CreateRegister(@Body() CreateDto: CreateRegisDto ) {
    return this.registerService.createRegis(CreateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  async UpdateRegister(@Body() CreateDto: PatchRegisDto  ,@Request() req) {
    return this.registerService.UpdateRegis(CreateDto,req.user.userId);
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
  @Get()
  async GetInfo(@Request() req)
  {
    return this.registerService.GetInfo(req.user.userId);
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
  async testget(@Request() req) {
    return this.registerService.GetInfo2(req.user.userId);
  }
  
}
