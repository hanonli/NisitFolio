import { Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/portfolio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SimpleConsoleLogger } from 'typeorm';
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

  async removePort(portId:string, userId:string){
    const portid = new ObjectID(portId);
    const port =  await this.portRepository.findOne({where:{ _id: portid }});
  
    if (port && port.UserId === userId) {
      return await this.portRepository.remove(port);
    }
    
    return "can not delete other's data";
  }

  async updatePort(CreateDto: CreatePortfolioDto,portId:string, userId:string){
    const portid = new ObjectID(portId);
    const port =  await this.portRepository.findOne({where:{ _id: portid }});
  
    if (port && port.UserId === userId) {
      if (CreateDto.Port_Tag != null)
        port.Port_Tag = CreateDto.Port_Tag;
      if (CreateDto.Port_Privacy != null)
        port.Port_Privacy = CreateDto.Port_Privacy;
      return await this.portRepository.save(port);
    }
    
    return "can not update other's data";
  }



}
