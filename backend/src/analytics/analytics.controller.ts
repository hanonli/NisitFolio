import { Controller, Get } from '@nestjs/common';
import { AdditionalSkill } from './analytics.schema';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @Get('/additional')
  async findAddSkill(): Promise<AdditionalSkill[]> {
    return this.analyticsService.findAddSkill();
  }
}
