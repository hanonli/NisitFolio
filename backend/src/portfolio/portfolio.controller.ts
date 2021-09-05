import { Controller, Get, Post, Request, UseGuards , Body,Param} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PortService } from "./portfolio.service";
import { CreatePortfolioDto } from './dto/portfolio.dto';

@Controller("portfolio")
export class PortController {
  constructor(
    private readonly portService: PortService,
  ) {}

  @Get(':portfolioId')
  async getHello(@Param('portfolioId') portfolioId: string){
    return this.portService.getPort(portfolioId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
    async CreatePortfolio(@Body() CreateDto: CreatePortfolioDto ,@Request() req) {
      CreateDto.UserId = req.user.userId;
    return this.portService.createPort(CreateDto);
  }
}
