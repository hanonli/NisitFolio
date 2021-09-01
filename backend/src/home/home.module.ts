import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { HomePage } from './entity/homepage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestedJob,Userinfo } from 'src/register/entity/Register.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomePage,InterestedJob,Userinfo])
    
  ],
  controllers: [HomeController],
  providers: [HomeService],
  exports: [HomeService],
})
export class HomeModule {}
