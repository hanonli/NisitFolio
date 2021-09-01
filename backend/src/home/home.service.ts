import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account , Userinfo, InterestedJob} from './entity/homepage.entity'
import { HomePageDto } from './dto/home.dto';

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
      const toUserDto = (data1: Userinfo[],data2:InterestedJob[],data3: Account[] ): HomePageDto => {  
        const Firstname = data1[0].Firstname;
        const Lastname = data1[0].Lastname;
        const AboutMe  = data1[0].AboutMe;
        const Job_JobName = [] ;
        for (var _i = 0; _i < data2.length; _i++) {
          Job_JobName[_i]  = data2[_i].Job_JobName;
        }

        //const Job_JobName  = data2[0].Job_JobName;
        const ProfilePic  = data3[0].ProfilePic;
        let homepageDto: HomePageDto = { Firstname, Lastname, AboutMe , ProfilePic , Job_JobName };
        return homepageDto;
      }
      
      const user = await this.userinfoRepository.find({where:{ id: userId }})
      const tag = await this.InterestedJobRepository.find({where:{ id: userId }})
      const acc = await this.AccountJobRepository.find({where:{ id: userId }})

      //value.Firstname = user.find("Firstname");
      /*value.Lastname =
      value.ProfilePic =
      value.AboutMe =
      value.Job_JobName =*/
      
      return toUserDto(user,tag,acc);
    }
}
