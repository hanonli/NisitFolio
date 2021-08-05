import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyticsController } from './analytics.controller';
import { AccountSchema, AdditionalSkillSchema, ClassifySkillSchema, InterestedJobSchema, SkillSchema, UserSkillSchema } from './analytics.schema';
import { AnalyticsService } from './analytics.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AdditionalSkill', schema: AdditionalSkillSchema },
      { name: 'UserSkill', schema: UserSkillSchema },
      { name: 'Skill', schema: SkillSchema },
      { name: 'account', schema: AccountSchema},
      { name: 'InterestedJob', schema: InterestedJobSchema},
      { name: 'ClassifySkill', schema: ClassifySkillSchema},
    ]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})

export class AnalyticsModule {}