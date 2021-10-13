import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyticsController } from './analytics.controller';
import { AdditionalSkillSchema, AnalyticsSchema, HardSkillSchema, JobTitleSchema, UserAdditionalSkillSchema, UserJobSkillSchema } from './analytics.schema';
import { AnalyticsService } from './analytics.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserAdditionalSkill', schema: UserAdditionalSkillSchema },
      { name: 'UserJobSkill', schema: UserJobSkillSchema },
      { name: 'AdditionalSkill', schema: AdditionalSkillSchema },
      { name: 'JobTitle', schema: JobTitleSchema },
      { name: 'Analytics', schema: AnalyticsSchema },
      { name: 'HardSkill', schema: HardSkillSchema }
    ]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})

export class AnalyticsModule {}