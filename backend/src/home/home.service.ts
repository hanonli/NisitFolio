import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Userinfo, InterestedJob} from './entity/homepage.entity'

@Injectable()
export class HomeService {
    constructor(
    @InjectRepository(Userinfo)
    private userinfoRepository: Repository<Userinfo>,
    @InjectRepository(InterestedJob)
    private InterestedJobRepository: Repository<InterestedJob>,
    ){}
    getinformation(): string {
    return 'Nisitfolio';
  }
}
