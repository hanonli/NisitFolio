import { Controller, Get, Post, Request, UseGuards , Body,Param} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';
import { LoginDto } from './auth/dto/create-login.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('kuay/:email')
  async findemail(@Param('email') email: string)
  {
    return this.usersService.findOne(email);
  }


  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req,@RealIP() ip: string) {
    
    return this.authService.login(req.user,ip);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user.userId;
  }
}
