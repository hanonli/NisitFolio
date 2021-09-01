import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { HomeService } from './home.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller()
export class HomeController {
  constructor(
    private readonly homeService: HomeService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/homepage')
  async getinformation(@Request() req)
  {
    return this.homeService.getinformation(req.id);
  }


  /*@UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }*/
}