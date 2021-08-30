import { Body, Controller, Get, Post, Param, HttpException } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  // -------------------- AdditionalSkill ---------------------------

  @Get('/additional/:id')
  async findAddSkillById(@Param('id') id: string): Promise<any> {
    const oid = mongoose.Types.ObjectId(id);
    return this.analyticsService.findAddSkillById(oid);
  }

  // -------------------- MainSkill ---------------------------

  @Get('/main/:id')
  async findUserJobSkill(@Param('id') id: string): Promise<any> {
    const oid = mongoose.Types.ObjectId(id);
    return this.analyticsService.findUserJobSkill(oid);
  }

  @Get('/main/skill/:id/:SkillName')
  async findAUserSkill(
    @Param('id') id: string,
    @Param('SkillName') SkillName: string,
  ): Promise<any> {
    const oid = mongoose.Types.ObjectId(id);
    return this.analyticsService.findAUserSkill(SkillName, oid);
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
