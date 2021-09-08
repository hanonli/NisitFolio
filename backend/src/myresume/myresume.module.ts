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
@Module({

  imports: [TypeOrmModule.forFeature([Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Resume])
           ,MongooseModule.forFeature([{ name: "Resume2", schema: ResumeSchema }]) 
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