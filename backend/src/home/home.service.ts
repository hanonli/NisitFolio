import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Userinfo, InterestedJob, HomePage} from './entity/homepage.entity'
import { string } from 'joi';

@Injectable()
export class HomeService {
    constructor(
    @InjectRepository(Userinfo)
    private userinfoRepository: Repository<Userinfo>,
    @InjectRepository(InterestedJob)
    private InterestedJobRepository: Repository<InterestedJob>,
    ){}
    async getinformation2() {
      const x = "x";
      const z =await this.InterestedJobRepository.find({Job_Objective:x});
      const y = new HomePage;
      const a=[];
      for (var _i = 0; _i < z.length; _i++) {
        a.push(z[_i].Job_JobName);
      }
      y.Firstname=(await this.userinfoRepository.findOne({Gender:x})).Firstname;
      y.Lastname=(await this.userinfoRepository.findOne({Gender:x})).Lastname;
      y.AboutMe=(await this.userinfoRepository.findOne({Gender:x})).AboutMe;
      y.UserId=(await this.userinfoRepository.findOne({Gender:x})).UserId;
      y.Job_JobName=a;
      return y;
    }
    getinformation(): string {
    return 'Nisitfolio';
  }
}
