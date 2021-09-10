import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { ResumeService } from './resume.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller("addresume")
export class ResumeController {
  constructor(
    private readonly resumeService: ResumeService
  ) {}

  //@UseGuards(JwtAuthGuard)
  //(@Request() req)
  //(req.user.userId)
  @Get("")
  async getinformation()
  {
    return this.resumeService.getinformation();
  }

}