import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { EmailConfirmationModule } from 'src/emailconfirmation/emailConfirmation.module';
import { EmailModule } from 'src/email/email.module';

import { editprofileController } from './editprofile.controller';
import { editprofileService } from './editprofile.service';

//import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Resume} from './entity/Register.entity'
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,otest} from './entity/Register.entity'
import { JobTitle } from 'src/register/entity/JobTitle.entrity'
import { Skill } from 'src/register/entity/Skill.entrity'
import { HardSkill} from 'src/register/entity/HardSkill.entrity'

@Module({

  imports: [TypeOrmModule.forFeature([otest,Account, Userinfo,EducationHistory,WorkHistory,Certificate,AdditionalSkill,InterestedJob,HardSkill,JobTitle,Skill])
           ,MulterModule.register({
            dest: './upload',
          }),
          EmailConfirmationModule,
          EmailModule                                                                                                           ],
  
  controllers: [editprofileController],
  providers: [editprofileService],
  exports: [editprofileService],
})
export class EditProfileModule {}