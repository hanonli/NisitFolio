import { Controller, Get, Post, Request, UseGuards , Body,Param, Delete ,Patch} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MyResumeService } from "./myresume.service";
import { CreateResumeDto } from './dto/myresume.dto';


@Controller("myresume")
export class MyResumeController {
  constructor(
    private readonly resumeService: MyResumeService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
    async CreateResume(@Body() CreateDto: CreateResumeDto ,@Request() req) {
      CreateDto.UserId = req.user.userId;
    return this.resumeService.createResume(CreateDto);
  }
}
