import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(
    private readonly homeService: HomeService
  ) {}

  @Get('/homepage')
  async getinformation()
  {
    return this.homeService.getinformation();
  }


  /*@UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }*/
}