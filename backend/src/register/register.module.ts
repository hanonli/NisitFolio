import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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

@Module({
  imports: [TypeOrmModule.forFeature([DDJS,DDHS,DDCity,DDP,DDC, Account, Userinfo,City,Country,Province,EducationHistory,WorkHistory,SalaryType,Resume,Certificate,userjobskill,AdditionalSkill])],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService],
})
export class RegisterModule {}