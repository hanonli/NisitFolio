import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { HomeService } from './home.service';

@Controller("homepage")
export class HomeController {
  constructor(
    private readonly homeService: HomeService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Get('/homepage')
  async getinformation()
  {
    return this.homeService.getinformation();
  }
  @Get("")
  async infohomepage(){
    return this.homeService.getinformation2();
  }


  /*@UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }*/
}