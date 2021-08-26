import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
=======
import { MulterModule } from '@nestjs/platform-express';
import { EmailConfirmationModule } from 'src/emailconfirmation/emailConfirmation.module';
import { EmailModule } from 'src/email/email.module';
>>>>>>> cc62a96d4c1d2ba5aa7be0f0560291ce4085979b

import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory} from './entity/Register.entity'

<<<<<<< HEAD
import Account from './account.entity';
import Userinfo from './userinfo.entity';
import {City} from './entity/City.entity';
import {Country} from './entity/Country.entity';
import {Province} from './entity/Province.entity';
import { WorkHistory } from './entity/WorkHistory.entity';
import { EducationHistory } from './entity/EducationHistory.entity';
import SalaryType from './entity/SalaryType.entity';
import Resume from './entity/Resume.entity';
import Certificate from './entity/Certificate.entity';
import userjobskill from './entity/UserJobSkill.entity';
import { AdditionalSkill } from './entity/AdditionalSkill.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Account, Userinfo,City,Country,Province,EducationHistory,WorkHistory,SalaryType,Resume,Certificate,userjobskill,AdditionalSkill])],
=======
import { Country } from 'src/register/entity/Country.entity'
import { City } from 'src/register/entity/City.entity'
import { Province } from 'src/register/entity/Province.entity'
import { JobTitle } from 'src/register/entity/JobTitle.entrity'
import { Skill } from 'src/register/entity/Skill.entrity'

@Module({
  /*
  imports: [TypeOrmModule.forFeature([otest,DDJS,DDHS,DDCity,DDP,DDC, Account, Userinfo,City,Country,Province,EducationHistory,WorkHistory,SalaryType,Resume,Certificate,userjobskill,AdditionalSkill])]
  ,
  */
  ///*
  imports: [TypeOrmModule.forFeature([Account, Userinfo,EducationHistory,WorkHistory,Certificate,AdditionalSkill,InterestedJob,Country,Province,City,JobTitle,Skill])
           ,MulterModule.register({
            dest: './upload',
          }),
          EmailConfirmationModule,
          EmailModule                                                                                                           ],
  
>>>>>>> cc62a96d4c1d2ba5aa7be0f0560291ce4085979b
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}