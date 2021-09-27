import { Injectable, HttpException , HttpStatus } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/portfolio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture} from './entity/portfolio.entity'
import { ObjectID } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio2, PortfolioDocument} from './entity/portfolio.schema';
//import { Portfolio3} from './dto/portfoli4';
import { UserInfoDocument, UserInfoMongoose } from 'src/register/entity/register.schema';
import Portfolio3 from './dto/portfolio4.dto';
import { hearderDto } from 'src/portfolio/dto/haerder.dto';

@Injectable()
export class PortService {
  constructor(
    @InjectRepository(Portfolio)
    private portRepository: Repository<Portfolio>,
    @InjectRepository(PortfolioPicture)
    private portfolioPictureRepository: Repository<PortfolioPicture>,
    @InjectModel(Portfolio2.name) 
    private portModel: Model<PortfolioDocument>,
    @InjectRepository(Userinfo)
    private userInfoRepository: Repository<Userinfo>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    


  ) {}
  async getportheader(UserID:string ){
    const id = new ObjectID(UserID);

    const get_header=new hearderDto;
    const account=await this.accountRepository.findOne({where:{_id:id}});
    const userinfo=await this.userInfoRepository.findOne({where:{UserId:UserID}});
    const port=await this.portModel.findOne({UserId : UserID});

    get_header.Email=account.Email;
    get_header.Firstname=userinfo.Firstname;
    get_header.Lastname=userinfo.Lastname;
    get_header.ProfilePic=account.ProfilePic;
    get_header.Country=userinfo.Country;
    get_header.City=userinfo.City;
    get_header.AboutMe=userinfo.AboutMe;
    get_header.Province=userinfo.Province;
    get_header.Port_Date=port.Port_Date;
    get_header.Privacy=account.Privacy;
    //*/
    return get_header;
    
  }
  async getPort(portId:string ){
    const id = new ObjectID(portId);
    return this.portModel.findById(id);
  }


  async getPortbyUser(userId:string ){
    return this.portModel.find({UserId : userId});
  }
  async createPort(CreateDto: CreatePortfolioDto ,ip:string){
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});

    const user = await this.userInfoRepository.findOne({where:{ UserId : CreateDto.UserId }});
    const port = new Portfolio(); 
    port.UserId = CreateDto.UserId;
    port.Port_Name = CreateDto.Port_Name;
    port.Port_Info = CreateDto.Port_Info;
    port.owner = user.Firstname + " " + user.Lastname;
    port.totalBookmark = 0;
    port.Port_Tag = CreateDto.Port_Tag;
    port.Port_Privacy = CreateDto.Port_Privacy;
    port.Port_Date = CreateDto.Port_Date;
    
    const portpic = new PortfolioPicture();
    portpic.Pic = CreateDto.Pic;
    portpic.Description =  CreateDto.Description;

    port.portfolioPictures = [portpic];

    port.create_time = isoTime;
    port.last_modified = [isoTime];
    port.modified_by = [ip];

    const portid = (await this.portRepository.save(port)).id;
    portpic.PortId = portid;

    portpic.last_modified =  [isoTime];
    portpic.create_time = isoTime;

    return await this.portfolioPictureRepository.save(portpic);
  }

  async removePort(portId:string, userId:string){
    const portid = new ObjectID(portId);
    const port =  await this.portRepository.findOne({where:{ _id: portid }});
  
    if (port && port.UserId === userId) {
      const portpic =  await this.portfolioPictureRepository.findOne({where:{ PortId: port.id }});
      await this.portfolioPictureRepository.remove(portpic);
      return await this.portRepository.remove(port);
    }
    
    throw new HttpException({
      status: HttpStatus.UNAUTHORIZED,
      error: 'Can not Delete Other Data',
    }, HttpStatus.UNAUTHORIZED);
  }

  async updatePort(CreateDto: CreatePortfolioDto,portId:string, userId:string){
    const portid = new ObjectID(portId);
    const port =  await this.portModel.findById(portid);
    const portpic =  await this.portfolioPictureRepository.findOne({where:{ PortId: portid }});
    
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
    const portfoliopic = new PortfolioPicture();
    portfoliopic.create_time=portpic.create_time;
    portfoliopic.last_modified=portpic.last_modified;
    portfoliopic.last_modified.push(isoTime)

    await this.portfolioPictureRepository.remove(portpic);
    portfoliopic.PortId = portid;
    
    var portpic_arr = [];
    if (port && port.UserId === userId) {
      if (CreateDto.Port_Tag != null)
        port.Port_Tag = CreateDto.Port_Tag;
      if (CreateDto.Port_Privacy != null)
        port.Port_Privacy = CreateDto.Port_Privacy;
      if (CreateDto.Pic != null)
        portfoliopic.Pic = CreateDto.Pic;
      if (CreateDto.Description != null)
        portfoliopic.Description =  CreateDto.Description;
      portpic_arr.push(portfoliopic)
      port.portfolioPictures = portpic_arr;
      await this.portfolioPictureRepository.save(portfoliopic);
      return await this.portModel.create(port);
    }
  }



}
