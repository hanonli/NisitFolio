import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { EmailConfirmationModule } from 'src/emailconfirmation/emailConfirmation.module';
import { EmailModule } from 'src/email/email.module';

import { MyResumeController } from './myresume.controller';
import { MyResumeService } from './myresume.service';

import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Resume} from './entity/myresume.entity'
import { Resume2 , ResumeSchema} from './entity/myresume.schema';
import { Portfolio2, PortfolioSchema } from '../portfolio/entity/portfolio.schema';
import { Resume3 } from './entity/myresume2.entity';
import {Public_resume} from './entity/Color_priv_resume.entity'
import { Public_resume2,Public_resumeSchema } from './entity/Color_priv_resume.schema';

@Module({

  imports: [TypeOrmModule.forFeature([Public_resume,Resume3,Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Resume])
           ,MongooseModule.forFeature([{ name: Public_resume2.name, schema: Public_resumeSchema },{ name: Resume2.name, schema: ResumeSchema },{ name: Portfolio2.name, schema: PortfolioSchema }]) 
           ,MulterModule.register({
            dest: './upload',
          }),
          EmailConfirmationModule,
          EmailModule                                                                                                           ],
  
  controllers: [MyResumeController],
  providers: [MyResumeService],
  exports: [MyResumeService],
})
export class MyResumeModule {}