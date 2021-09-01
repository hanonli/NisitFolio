import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
<<<<<<< HEAD
import { HomePage } from './entity/homepage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestedJob,Userinfo } from 'src/register/entity/Register.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomePage,InterestedJob,Userinfo])
=======
import { Userinfo, InterestedJob} from './entity/homepage.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Userinfo,InterestedJob])
>>>>>>> 25600d24d0a40562df2d12e434ef173b6c0e87c0
    
  ],
  controllers: [HomeController],
  providers: [HomeService],
  exports: [HomeService],
})
export class HomeModule {}
