import { Controller, Get, Post, Body, Param, Request, Patch, UseGuards } from '@nestjs/common';

import { RegisterService } from './register.service';
import { CreateRegisDto } from './dto/create-register.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


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

}
