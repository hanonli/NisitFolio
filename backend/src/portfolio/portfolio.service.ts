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
    private UserInfoRepository: Repository<Userinfo>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    


  ) {}
  async getPort(portId:string ){
    const id = new ObjectID(portId);
    const Get_Portfolio = new Portfolio3;
    //const Id = new ObjectID(userId);

    const Port=await this.portModel.findById(id);

    const userId=Port.UserId;
    const id2 = new ObjectID(userId);

    const account=await this.accountRepository.findOne({where:{_id:id2}});

    //return account
    
    const userinfo=await this.UserInfoRepository.findOne({where:{UserId:userId}});
    //return userinfo
    
    const Port2=await this.portModel.find({UserId : userId});
    //return Port
    

    Get_Portfolio.Email=account.Email;
    Get_Portfolio.Firstname=userinfo.Firstname;
    Get_Portfolio.Lastname=userinfo.Lastname;
    Get_Portfolio.ProfilePic=account.ProfilePic;
    Get_Portfolio.Country=userinfo.Country;
    Get_Portfolio.City=userinfo.City;
    Get_Portfolio.AboutMe=userinfo.AboutMe;
    Get_Portfolio.Province=userinfo.Province;
    //return Get_Portfolio;
    
    Get_Portfolio.ResumeId[0]=Port.ResumeId
    Get_Portfolio.Port_Privacy[0]=Port.Port_Privacy
    Get_Portfolio.Port_Tag[0]=Port.Port_Tag
    Get_Portfolio.create_time[0]=Port.create_time
    Get_Portfolio.last_modified[0]=Port.last_modified
    Get_Portfolio.modified_by[0]=Port.modified_by
    Get_Portfolio.portfolioPictures[0]=Port.portfolioPictures
    //*/
    return Get_Portfolio;
    //return this.portModel.findById(id);
  }

  //--------------------------------------------------------------------------

  async getPortbyUser(userId:string ){
    const Get_Portfolio = new Portfolio3;
    const id = new ObjectID(userId);
    const account=await this.accountRepository.findOne({where:{_id:id}});
    //return account
    
    const userinfo=await this.UserInfoRepository.findOne({where:{UserId:userId}});
    //return userinfo
    
    const Port=await this.portModel.find({UserId : userId});
    //return Port
    

    Get_Portfolio.Email=account.Email;
    Get_Portfolio.Firstname=userinfo.Firstname;
    Get_Portfolio.Lastname=userinfo.Lastname;
    Get_Portfolio.ProfilePic=account.ProfilePic;
    Get_Portfolio.Country=userinfo.Country;
    Get_Portfolio.City=userinfo.City;
    Get_Portfolio.AboutMe=userinfo.AboutMe;
    Get_Portfolio.Province=userinfo.Province;
    //return Get_Portfolio;
    const ResumeId_list=[]
    const Port_Privacy_list=[]
    const Port_Tag_list=[]
    const create_time_list=[]
    const last_modified_list=[]
    const modified_by_list=[]
    const portfolioPictures_list=[]

    for (var _i = 0; _i < Port.length; _i++) {

      ResumeId_list.push(Port[_i].ResumeId);
      Port_Privacy_list.push(Port[_i].Port_Privacy);
      Port_Tag_list.push(Port[_i].Port_Tag);
      create_time_list.push(Port[_i].create_time);
      last_modified_list.push(Port[_i].last_modified);
      modified_by_list.push(Port[_i].modified_by);
      portfolioPictures_list.push(Port[_i].portfolioPictures);
    }
    Get_Portfolio.ResumeId=ResumeId_list
    Get_Portfolio.Port_Privacy=Port_Privacy_list
    Get_Portfolio.Port_Tag=Port_Tag_list
    Get_Portfolio.create_time=create_time_list
    Get_Portfolio.last_modified=last_modified_list
    Get_Portfolio.modified_by=modified_by_list
    Get_Portfolio.portfolioPictures=portfolioPictures_list
    //*/
    return Get_Portfolio;
  }

  async createPort(CreateDto: CreatePortfolioDto ,ip:string){
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});

    const port = new Portfolio(); 
    port.UserId = CreateDto.UserId;
    port.Port_Tag = CreateDto.Port_Tag;
    port.Port_Privacy = CreateDto.Port_Privacy;
    
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
    await this.portfolioPictureRepository.remove(portpic);
    const portfoliopic = new PortfolioPicture();
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
    
    throw new HttpException({
      status: HttpStatus.UNAUTHORIZED,
      error: 'Can not Patch Other Data',
    }, HttpStatus.UNAUTHORIZED);
  }



}
