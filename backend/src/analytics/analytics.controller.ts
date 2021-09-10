import { Body, Controller, Get, Post, Param, HttpException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @Get('/additional/:id')
  async additionalAnalytics(@Param('id') id: string): Promise<any> {
    const oid = mongoose.Types.ObjectId(id);
    return this.analyticsService.additionalAnalytics(oid);
  }

  // -------------------- MainSkill ---------------------------

  @Get('/main/:id')
  async findUserJobSkill(@Param('id') id: string): Promise<any> {
    const oid = mongoose.Types.ObjectId(id);
    return this.analyticsService.findUserJobSkill(oid);
  }

  @Post('main/UserJobSkill')
  async createUserJobSkill(
    @Body('userId') userId: string,
    @Body('Objective') Objective: string,
    @Body('Score') Score: number,
    @Body('JobName') JobName: string,
    @Body('SkillName') SkillName: string,
  ) {
    const oid = mongoose.Types.ObjectId(userId) ;
    return this.analyticsService.createUserJobSkill(oid, Objective, Score, JobName, SkillName) ;
  }

}
