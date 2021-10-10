import { Controller, Get, Post, Request, UseGuards , Body,Param, Delete ,Patch} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MyResumeService } from "./myresume.service";
import { CreateResumeDto } from './dto/myresume.dto';
import { RealIP } from 'nestjs-real-ip';


@Controller("myresume")
export class MyResumeController {
  constructor(
    private readonly resumeService: MyResumeService,
  ) {}


  @Get(':resumeId')
  async getResume(@Param('resumeId') resumeId: string){
    return this.resumeService.getResume(resumeId);
  }

  @Get('/user/:userid')
  async getResumebyUser(@Param('userid') UserId: string){
    return this.resumeService.getResumebyUser(UserId);
  }

  @UseGuards(JwtAuthGuard)
  @Get("/header/:x")
    async Getheader(@Param('x') x: string,@Request() req) {
      return this.resumeService.getResumeheader(req.user.userId);
  }
  
  

  @UseGuards(JwtAuthGuard)
  @Post()
    async CreateResume(@Body() CreateDto: CreateResumeDto ,@Request() req,@RealIP() ip: string) {
      CreateDto.UserId = req.user.userId;
    return this.resumeService.createResume(CreateDto,ip);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
    async GetOwnResume(@Request() req) {
      return this.resumeService.getResumebyUser(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":resumeId")
    async removeResume(@Param('resumeId') resumeId: string,@Request() req,@RealIP() ip: string) {
      return this.resumeService.removeResume(resumeId,req.user.userId);

    }

  @UseGuards(JwtAuthGuard)
  @Patch(":resumeId")
    async updateResume(@Body() CreateDto: CreateResumeDto ,@Param('resumeId') resumeId: string,@Request() req ,@RealIP() ip: string) {
      return this.resumeService.updateResume(CreateDto,resumeId,req.user.userId,ip);

    }

  /*@Post("makeresume")
    async makeResume(@Body() CreateDto: CreateResumeDto ){
      return this.resumeService.makeResume(CreateDto);
    }*/
}
