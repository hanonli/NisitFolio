import { Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/portfolio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture} from './entity/portfolio.entity'

@Injectable()
export class PortService {
  constructor(
    @InjectRepository(Portfolio)
    private portRepository: Repository<Portfolio>,
    @InjectRepository(PortfolioPicture)
    private portfolioPictureRepository: Repository<PortfolioPicture>,

  ) {}
  async getPort(portId:string ){
    return 'Nisitfolio';
  }

  async createPort(CreateDto: CreatePortfolioDto ){
    const port = new Portfolio(); 
    port.UserId = CreateDto.UserId;
    port.Port_Tag = CreateDto.Port_Tag;
    port.Port_Privacy = CreateDto.Port_Privacy;
    
    const portpic = new PortfolioPicture();
    portpic.Pic = CreateDto.Pic;
    portpic.Description =  CreateDto.Description;

    //console.log(portpic)
    port.portfolioPictures = [portpic];
    //portpic.portfolio = port;

    const portid = (await this.portRepository.save(port)).id;
    portpic.PortId = portid;
    
    return await this.portfolioPictureRepository.save(portpic);
  }

}
