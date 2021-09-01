import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { Account , Userinfo, InterestedJob} from './entity/homepage.entity'
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forFeature([Userinfo,InterestedJob,Account])
    
  ],
  controllers: [HomeController],
  providers: [HomeService],
  exports: [HomeService],
})
export class HomeModule {}
