import { Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/portfolio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture} from './entity/portfolio.entity'
import { ObjectID } from 'mongodb';

@Injectable()
export class PortService {
  constructor(
    @InjectRepository(Portfolio)
    private portRepository: Repository<Portfolio>,
    @InjectRepository(PortfolioPicture)
    private portfolioPictureRepository: Repository<PortfolioPicture>,

  ) {}
  async getPort(portId:string ){
    const id = new ObjectID(portId);
    return this.portRepository.findOne({where:{ _id: id }});
  }

  async getPortbyUser(userId:string ){
    return this.portRepository.find({where:{ UserId: userId }});
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
  
  async GetOwnPort(userId:string){
    const port = this.portRepository.find({where:{ UserId: userId }})
    return port;
  }


}
