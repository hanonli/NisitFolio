import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { RegisterService } from './register.service';
import { CreateRegisDto } from './dto/create-register.dto';



@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async CreateRegister(@Body() CreateDto: CreateRegisDto ) {
    return this.registerService.createRegis(CreateDto);
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
