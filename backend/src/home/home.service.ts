import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account , Userinfo, InterestedJob} from './entity/homepage.entity'
import { HomePageDto } from './dto/home.dto';
import { ObjectID as ObjectIDType} from 'typeorm'
import { ObjectID } from 'mongodb';

@Injectable()
export class HomeService {
    constructor(
    @InjectRepository(Userinfo)
    private userinfoRepository: Repository<Userinfo>,
    @InjectRepository(InterestedJob)
    private InterestedJobRepository: Repository<InterestedJob>,
    @InjectRepository(Account)
    private AccountJobRepository: Repository<Account>,
    ){}
    async getinformation(userId:string)
    {
      //const toUserDto = (data1: Userinfo,data2:InterestedJob[],data3: Account ): HomePageDto => {  
      const toUserDto = (data1: Userinfo): HomePageDto => {  
        const Firstname = data1.Firstname;
        const Lastname = data1.Lastname;
        const AboutMe  = data1.AboutMe;
        const Job_JobName = data1.tags ;

        //const Job_JobName  = data2[0].Job_JobName;
        const ProfilePic  = data1.ProfilePic;
        let homepageDto: HomePageDto = { Firstname, Lastname, AboutMe , ProfilePic , Job_JobName };
        return homepageDto;
      }
      

      const user = await this.userinfoRepository.findOne({where:{ UserId: userId }})

      return toUserDto(user);
      
    }
}