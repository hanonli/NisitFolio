import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyticsController } from './analytics.controller';
import { ClassifySkillSchema, InterestedJobSchema, SkillSchema, UserAdditionalSkillSchema, UserSkillSchema } from './analytics.schema';
import { AnalyticsService } from './analytics.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserAdditionalSkill', schema: UserAdditionalSkillSchema },
      { name: 'UserSkill', schema: UserSkillSchema },
      { name: 'Skill', schema: SkillSchema },
      { name: 'InterestedJob', schema: InterestedJobSchema},
      { name: 'ClassifySkill', schema: ClassifySkillSchema},
    ]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})

export class AnalyticsModule {}