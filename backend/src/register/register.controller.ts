import { Controller, Get, Post, Body, Param, Request, Patch, UseGuards } from '@nestjs/common';

import { RegisterService } from './register.service';
import { CreateRegisDto } from './dto/create-register.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EditProfileDto2 } from './dto/editprofile2.dto';


@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async CreateRegister(@Body() CreateDto: CreateRegisDto ) {
    return this.registerService.createRegis(CreateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  async UpdateRegister(@Body() CreateDto: CreateRegisDto  ,@Request() req) {
    return this.registerService.UpdateRegis(CreateDto,req.user.userId);
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
  @Patch()
    async UpdateProfile(@Body() CreateDto: EditProfileDto2,@Request() req) {
      const x=req.user.userId
      //const x="613a13762a58701a949f5d19";
    return this.registerService.UpdatProfile(x,CreateDto);
  }

}
