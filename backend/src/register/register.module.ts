<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

import Account from './account.entity';
import Userinfo from './userinfo.entity';
import City from './entity/City.entity';
import Country from './entity/Country.entity';
import Province from './entity/Province.entity';
import WorkHistory from './entity/WorkHistory.entity';
import EducationHistory from './entity/EducationHistory.entity';
import SalaryType from './entity/SalaryType.entity';
import Resume from './entity/Resume.entity';
import Certificate from './entity/Certificate.entity';
import userjobskill from './entity/UserJobSkill.entity';
import AdditionalSkill from './entity/AdditionalSkill.entity';
import DDC from './entity/DDC.entity';
import DDP from './entity/DDP.entity';
import DDCity from './entity/DDCity.entity';
import DDHS from './entity/DDCity.entity';
import DDJS from './entity/DDJS.entity';
import otest from './entity/0test.entity';

@Module({
  /*
  imports: [TypeOrmModule.forFeature([otest,DDJS,DDHS,DDCity,DDP,DDC, Account, Userinfo,City,Country,Province,EducationHistory,WorkHistory,SalaryType,Resume,Certificate,userjobskill,AdditionalSkill])]
  ,
  */
  ///*
  imports: [TypeOrmModule.forFeature([otest,DDJS,DDHS,DDCity,DDP,DDC,Account, Userinfo,City,Country,Province,EducationHistory,WorkHistory,SalaryType,Resume,Certificate,userjobskill,AdditionalSkill])
           ,MulterModule.register({
            dest: './upload',
          })],
  
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService],
})
=======
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

import Account from './account.entity';
import Userinfo from './userinfo.entity';
import City from './entity/City.entity';
import Country from './entity/Country.entity';
import Province from './entity/Province.entity';
import WorkHistory from './entity/WorkHistory.entity';
import EducationHistory from './entity/EducationHistory.entity';
import SalaryType from './entity/SalaryType.entity';
import Resume from './entity/Resume.entity';
import Certificate from './entity/Certificate.entity';
import userjobskill from './entity/UserJobSkill.entity';
import AdditionalSkill from './entity/AdditionalSkill.entity';
import DDC from './entity/DDC.entity';
import DDP from './entity/DDP.entity';
import DDCity from './entity/DDCity.entity';
import DDHS from './entity/DDHS.entity';
import DDJS from './entity/DDJS.entity';
import otest from './entity/0test.entity';

@Module({
  /*
  imports: [TypeOrmModule.forFeature([otest,DDJS,DDHS,DDCity,DDP,DDC, Account, Userinfo,City,Country,Province,EducationHistory,WorkHistory,SalaryType,Resume,Certificate,userjobskill,AdditionalSkill])]
  ,
  */
  ///*
  imports: [TypeOrmModule.forFeature([otest,DDJS,DDHS,DDCity,DDP,DDC,Account, Userinfo,City,Country,Province,EducationHistory,WorkHistory,SalaryType,Resume,Certificate,userjobskill,AdditionalSkill])
           ,MulterModule.register({
            dest: './upload',
          })],
  
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService],
})
>>>>>>> 286637a521e1d2471ac8141c7d6651cafc14af48
export class RegisterModule {}