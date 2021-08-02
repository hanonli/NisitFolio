import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Get('/main')
  async findUserSkill(): Promise<UserSkill[]> {
    return this.analyticsService.findUserSkill() ;
  }

  @Post('/main')
  async createUserSkill( 
    @Body('userId') userId: string,
    @Body('inJobId') inJobId: string,
    @Body('SkillId') SkillId: string,
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
