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
      const toUserDto = (data1: Userinfo,data2:InterestedJob[],data3: Account ): HomePageDto => {  
        const Firstname = data1.Firstname;
        const Lastname = data1.Lastname;
        const AboutMe  = data1.AboutMe;
        const Job_JobName = [] ;
        for (var _i = 0; _i < data2.length; _i++) {
          Job_JobName[_i]  = data2[_i].Job_JobName;
        }

        //const Job_JobName  = data2[0].Job_JobName;
        const ProfilePic  = data3.ProfilePic;
        let homepageDto: HomePageDto = { Firstname, Lastname, AboutMe , ProfilePic , Job_JobName };
        return homepageDto;
      }
      const id = new ObjectID(userId);
      

      const user = await this.userinfoRepository.findOne({where:{ UserId: id }})
      const tag = await this.InterestedJobRepository.find({where:{ UserId: id }})
      const acc = await this.AccountJobRepository.findOne({where:{ _id: id }});
      
      /*console.log(user)
      console.log(tag)
      console.log(acc)*/


      //value.Firstname = user.find("Firstname");
      /*value.Lastname =
      value.ProfilePic =
      value.AboutMe =
      value.Job_JobName =*/
      
      return toUserDto(user,tag,acc);
      
    }
}
