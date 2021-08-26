import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { EmailConfirmationModule } from 'src/emailconfirmation/emailConfirmation.module';
import { EmailModule } from 'src/email/email.module';

import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory} from './entity/Register.entity'

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
  
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService],
})
export class RegisterModule {}