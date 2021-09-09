import { Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/portfolio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture} from './entity/portfolio.entity'
import { ObjectID } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio2, PortfolioDocument} from './entity/portfolio.schema';

@Injectable()
export class PortService {
  constructor(
    @InjectRepository(Portfolio)
    private portRepository: Repository<Portfolio>,
    @InjectRepository(PortfolioPicture)
    private portfolioPictureRepository: Repository<PortfolioPicture>,
    @InjectModel(Portfolio2.name) 
    private portModel: Model<PortfolioDocument>

  ) {}
  async getPort(portId:string ){
    const id = new ObjectID(portId);
    return this.portModel.findById(id);
  }

  async getPortbyUser(userId:string ){
    return this.portModel.find({UserId : userId});
  }

  async createPort(CreateDto: CreatePortfolioDto ){
    const port = new Portfolio(); 
    port.UserId = CreateDto.UserId;
    port.Port_Tag = CreateDto.Port_Tag;
    port.Port_Privacy = CreateDto.Port_Privacy;
    
    const portpic = new PortfolioPicture();
    portpic.Pic = CreateDto.Pic;
    portpic.Description =  CreateDto.Description;

    port.portfolioPictures = [portpic];

    const portid = (await this.portRepository.save(port)).id;
    portpic.PortId = portid;
    
    return await this.portfolioPictureRepository.save(portpic);
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
    const port =  await this.portModel.findById(portid);
    const portfoliopic = await this.portfolioPictureRepository.findOne({where:{ PortId: portid }});
    var portpic_arr = [];
    if (port && port.UserId === userId) {
      if (CreateDto.Port_Tag != null)
        port.Port_Tag = CreateDto.Port_Tag;
      if (CreateDto.Port_Privacy != null)
        port.Port_Privacy = CreateDto.Port_Privacy;
      if (CreateDto.Pic != null)
        portfoliopic.Pic = CreateDto.Pic;
      if (CreateDto.Description != null)
        portfoliopic.Description = CreateDto.Description;
      portpic_arr.push(portfoliopic)
      port.portfolioPictures = portpic_arr;
      await this.portfolioPictureRepository.save(portfoliopic);
      return await this.portModel.create(port);
    }
    
    return "can not update other's data";
  }



}
