import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailConfirmationModule } from 'src/emailconfirmation/emailConfirmation.module';
import { EmailModule } from 'src/email/email.module';

import { PortController } from './portfolio.controller';
import { PortService } from './portfolio.service';

import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture} from './entity/portfolio.entity'
import { Portfolio2, PortfolioSchema } from './entity/portfolio.schema';
import { Bookmark } from './entity/portfliobookmark.entity';
@Module({

  imports: [TypeOrmModule.forFeature([Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Bookmark])
            ,MongooseModule.forFeature([{ name: Portfolio2.name, schema: PortfolioSchema }]) 
            ,MulterModule.register({
            dest: './upload',
          }),
          EmailConfirmationModule,
          EmailModule                                                                                                           ],
  
  controllers: [PortController],
  providers: [PortService],
  exports: [PortService],
})
export class PortModule {}