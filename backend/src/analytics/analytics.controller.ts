import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { AdditionalSkill, Skill, UserSkill } from './analytics.schema';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @Get('/additional')
  async findAddSkill(): Promise<AdditionalSkill[]> {
    return this.analyticsService.findAddSkill();
  }

  // -------------------- UserSkill ---------------------------

  @Get('/main') // Find All User skill
  async findAllUserSkill(): Promise<UserSkill[]> {
    return this.analyticsService.findAllUserSkill() ;
  }

  @Get('/main/:userId/skill')
  async findUserSkill(@Param('userId', ParseObjectIdPipe) userId: ObjectId): Promise<UserSkill[]> {
    return this.analyticsService.findUserSkill(userId) ;
  }

  @Get('/main/:userId/analys')
  async AnalysUserSkill(@Param('userId', ParseObjectIdPipe) userId: ObjectId) : Promise<any> {
    return this.analyticsService.AnalysUserSkill(userId) ;
  }

  @Post('/main')
  async createUserSkill( 
    @Body('userId', ParseObjectIdPipe) userId: ObjectId,
    @Body('inJobId') inJobId: string,
    @Body('SkillId', ParseObjectIdPipe) SkillId: ObjectId,
    @Body('Score') Score: number
  ) {
    return await this.analyticsService.createUserSkill(userId, inJobId, SkillId, Score);
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
