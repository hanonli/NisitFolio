import { Controller, Get, Post, Request, UseGuards , Body,Param, Delete ,Patch} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { editprofileService } from "./editprofile.service";
import { EditProfileDto } from './dto/editprofile.dto';
import { EditProfileDto2 } from './dto/editprofile2.dto';


@Controller("editprofile")
export class editprofileController {
  constructor(
    private readonly resumeService: editprofileService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
    async GetProfile(@Request() req) {
      const x=req.user.userId
      //const x="613881e534f592a9d7f788cf";
    return this.resumeService.GetInfo(x);
    //return "Not sus";
  }
  @Delete()
    async test(@Request() req) {
      const x=req.user.userId
      //const x="613881e534f592a9d7f788cf";
    return this.resumeService.testdele(x);
  }
  //-------------------------------------มีการ remove โปรดใช้งานระวังๆ
  @UseGuards(JwtAuthGuard)
  @Patch()
    async UpdateProfile(@Body() CreateDto: EditProfileDto2,@Request() req) {
      const x=req.user.userId
      //const x="613881e534f592a9d7f788cf";
    return this.resumeService.UpdatProfile(x,CreateDto);
  }
}
