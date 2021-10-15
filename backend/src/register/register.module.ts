import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailConfirmationModule } from 'src/emailconfirmation/emailConfirmation.module';
import { EmailModule } from 'src/email/email.module';
import { HttpModule } from '@nestjs/axios';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Resume,UserJobSkill} from './entity/Register.entity'
import { CreateRegisDto } from './dto/create-register.dto';

import { Resume2 , ResumeSchema} from '../myresume/entity/myresume.schema';
import { Portfolio2, PortfolioSchema } from '../portfolio/entity/portfolio.schema';
import { JobTitle } from 'src/register/entity/JobTitle.entrity'
import { Skill } from 'src/register/entity/Skill.entrity'
import { HardSkill} from 'src/register/entity/HardSkill.entrity'
import { UserInfoMongoose } from './entity/register.schema';
import { UserInfoSchema } from './entity/register.schema';
import { Bookmark } from './entity/bookmark.entity';
@Module({

  imports: [TypeOrmModule.forFeature([Bookmark,Account, Userinfo,EducationHistory,WorkHistory,Certificate,AdditionalSkill,InterestedJob,HardSkill,JobTitle,Skill,Portfolio,PortfolioPicture,Resume,UserJobSkill])
            ,MongooseModule.forFeature([{ name: UserInfoMongoose.name, schema: UserInfoSchema },{ name: Resume2.name, schema: ResumeSchema },{ name: Portfolio2.name, schema: PortfolioSchema }])  
            ,MulterModule.register({
            dest: './upload',
          }),
          EmailConfirmationModule,
          EmailModule,
          HttpModule,                                                                                                           ],
  
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService],
})
export class RegisterModule {}