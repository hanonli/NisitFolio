import { Body, Controller, Get, Post, Param, HttpException } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { Skill, UserSkill, ClassifySkill } from './analytics.schema';
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

  // -------------------- UserSkill ---------------------------
  
  @Get('/main') // Find All User skill
  async findAllUserSkill(): Promise<UserSkill[]> {
    return this.analyticsService.findAllUserSkill() ;
  }

  @Get('/main/:userId')
  async findUserSkill(@Param('userId', ParseObjectIdPipe) userId: ObjectId): Promise<UserSkill[]> {
    return this.analyticsService.findUserSkill(userId) ;
  }
  
  @Post('/main')
  async createUserSkill( 
    @Body('userId', ParseObjectIdPipe) userId: ObjectId,
    @Body('inJobId', ParseObjectIdPipe) inJobId: ObjectId,
    @Body('SkillId', ParseObjectIdPipe) SkillId: ObjectId,
    @Body('Score') Score: number
    ): Promise<UserSkill> {
    return await this.analyticsService.createUserSkill(userId, inJobId, SkillId, Score);
  }

  async AddInterestedJobPercentage(
    @Param('JobTitle') JobTitle: string
  ): Promise<any[]> {
    return this.analyticsService.InterestedJobPercentage(JobTitle, 0) ;
  }

  // -------------------- ClassifySkill ---------------------------
  
  @Post('/ClassifySkill/:userId')
  async createClassifySkill(
    @Param('userId', ParseObjectIdPipe) userId: ObjectId,
    @Body('JobTitle') JobTitle: string,
    @Body('SkillName') SkillName: string,
    @Body('IsMain') IsMain: number,
  ): Promise<ClassifySkill> {
    return this.analyticsService.createClassifySkill(userId, JobTitle, SkillName, IsMain);
  }

  // -------------------- Interested Job ---------------------------

  @Post('/Interestedjob/:userId')
  async createInterestedJob(
    @Param('userId', ParseObjectIdPipe) userId: ObjectId ,
    @Body('objective') objective: string,
  ){
    return this.analyticsService.createInterestedJob(userId, objective) ;
  }

  @Get('/main/Interestedjob/:JobTitle')
  async MainInterestedJobPercentage(
    @Param('JobTitle') JobTitle: string
  ): Promise<any[]> {
    return this.analyticsService.InterestedJobPercentage(JobTitle, 1) ;
  }

  // -------------------- Skill ---------------------------
  
  @Get('/skills')
  async findAllSkill(): Promise<Skill[]> {
    return this.analyticsService.findAllSkill()
  }

  @Post('/skills')
  async createSkill(@Body('SkillName') SkillName: string) {
    return await this.analyticsService.createSkill(SkillName) ;
  }
}
