import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { Userinfo, InterestedJob} from './entity/homepage.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Userinfo,InterestedJob])
    
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
