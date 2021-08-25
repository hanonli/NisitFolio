import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { EmailConfirmationModule } from 'src/emailconfirmation/emailConfirmation.module';
import { EmailModule } from 'src/email/email.module';

import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory} from './entity/Register.entity'


@Module({
  /*
  imports: [TypeOrmModule.forFeature([otest,DDJS,DDHS,DDCity,DDP,DDC, Account, Userinfo,City,Country,Province,EducationHistory,WorkHistory,SalaryType,Resume,Certificate,userjobskill,AdditionalSkill])]
  ,
  */
  ///*
  imports: [TypeOrmModule.forFeature([Account, Userinfo,EducationHistory,WorkHistory,Certificate,AdditionalSkill,InterestedJob])
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