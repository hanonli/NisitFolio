import { Controller, Get, Post, Request, UseGuards , Body,Param, Delete ,Patch} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PortService } from "./portfolio.service";
import { CreatePortfolioDto } from './dto/portfolio.dto';
import { RealIP } from 'nestjs-real-ip';
import { count } from 'console';


@Controller("portfolio")
export class PortController {
  constructor(
    private readonly portService: PortService,
  ) {}

  @Get(':portfolioId')
  async getPort(@Param('portfolioId') portfolioId: string){
    return this.portService.getPort(portfolioId);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('/header/:x')
  async getheadert(@Param('x') x: string,@Request() req){
    const userid= req.user.userId;
    return this.portService.getportheader(userid);
  }

  @Get('/user/:userid')
  async getPortbyUser(@Param('userid') UserId: string){
    return this.portService.getPortbyUser(UserId);
  }


  @UseGuards(JwtAuthGuard)
  @Post()
    async CreatePortfolio(@Body() CreateDto: CreatePortfolioDto ,@Request() req,@RealIP() ip: string) {
      CreateDto.UserId = req.user.userId;
    return this.portService.createPort(CreateDto,ip);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
    async GetOwnPort(@Request() req) {
      return this.portService.getPortbyUser(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":portfolioId")
    async removePort(@Param('portfolioId') portfolioId: string,@Request() req ) {
      return this.portService.removePort(portfolioId,req.user.userId);

  }




  @UseGuards(JwtAuthGuard)
  @Patch(":portfolioId")
    async updatePort(@Body() CreateDto: CreatePortfolioDto ,@Param('portfolioId') portfolioId: string,@Request() req ) {
      return this.portService.updatePort(CreateDto,portfolioId,req.user.userId);
    }
    //*/
    
  @UseGuards(JwtAuthGuard)
  @Patch("Privacy/:portfolioId")
    async updatePortP(@Body() CreateDto: CreatePortfolioDto ,@Param('portfolioId') portfolioId: string,@Request() req ) {
      return this.portService.updatePortP(CreateDto,portfolioId,req.user.userId);
  
    }
  @UseGuards(JwtAuthGuard)
  @Get('/sort/:sort')
  //async getThisUserBookmarks(@Param('id') userId: string,@Param('sort') sort: string): Promise<any[]> {
  async sortportUser(@Request() req,@Param('sort') sort: string){
      return this.portService.sortport(req.user.userId, sort);
    }
  
    
}
