import { Injectable, HttpException , HttpStatus, ConsoleLogger } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/portfolio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { Account, Userinfo,AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture} from './entity/portfolio.entity'
import { Resume } from '../register/entity/Register.entity';
import { ObjectID } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio2, PortfolioDocument} from './entity/portfolio.schema';
//import { Portfolio3} from './dto/portfoli4';
import { Resume2 , ResumeDocument} from '../myresume/entity/myresume.schema';
import { UserInfoDocument, UserInfoMongoose } from 'src/register/entity/register.schema';
import Portfolio3 from './dto/portfolio4.dto';
import { hearderDto } from 'src/portfolio/dto/haerder.dto';
import { Bookmark } from './entity/portfliobookmark.entity';

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
    @InjectRepository(Bookmark)
    private BookmarkRepository: Repository<Bookmark>,
    @InjectModel(Resume2.name) 
    private resumeModel: Model<ResumeDocument>,
    


  ) {}
  async getportheader(UserID:string ){
    const id = new ObjectID(UserID);

    const get_header=new hearderDto;
    const account=await this.accountRepository.findOne({where:{_id:id}});
    const userinfo=await this.userInfoRepository.findOne({where:{UserId:UserID}});
    //const port=await this.portModel.findOne({UserId : UserID});

    get_header.Email=account.Email;
    get_header.Firstname=userinfo.Firstname;
    get_header.Lastname=userinfo.Lastname;
    get_header.ProfilePic=account.ProfilePic;
    get_header.Country=userinfo.Country;
    get_header.City=userinfo.City;
    get_header.AboutMe=userinfo.AboutMe;
    get_header.Province=userinfo.Province;
    //get_header.Port_Date=port.Port_Date;
    get_header.Privacy=account.Privacy;
    //*/
    return get_header;
    
  }
  async getPort(portId:string ){
    const id = new ObjectID(portId);
    const neww= new Portfolio;
    const port_by_id=await this.portRepository.findOne({where:{ _id : id }});
    //return port_by_id.portfolioPictures;
    neww.Port_Date=port_by_id.Port_Date;
    neww.Port_Info=port_by_id.Port_Info
    neww.Owner=port_by_id.Owner
    neww.Port_Name=port_by_id.Port_Name
    neww.Port_Privacy=port_by_id.Port_Privacy
    neww.Port_Tag=port_by_id.Port_Tag
    neww.UserId=port_by_id.UserId
    neww.create_time=port_by_id.create_time
    neww.portfolioPictures=port_by_id.portfolioPictures
    neww.totalBookmark=port_by_id.totalBookmark
    neww.modified_by=port_by_id.modified_by
    neww.last_modified=port_by_id.last_modified

    const Userid = port_by_id.UserId;
    const UseridOb = new ObjectID(Userid);

    const account=await this.accountRepository.findOne({where:{_id:UseridOb}});

    neww.Email=account.Email;
    neww.ProfilePic=account.ProfilePic;

    return neww;


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
    port.ResumeId = new Array();
    port.Owner = user.Firstname + " " + user.Lastname;
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
    

    const portid = (await this.portRepository.save(port))._id;
    portpic.PortId = portid;

    portpic.last_modified =  [isoTime];
    portpic.create_time = isoTime;
    

    return await this.portfolioPictureRepository.save(portpic);
  }

  async removePort(portId:string, userId:string){
    const portid = new ObjectID(portId);
    const port =  await this.portRepository.findOne({where:{ _id: portid }});
    if (port && port.UserId === userId) {
      const thatbookmark = await this.BookmarkRepository.find({where:{ id: portid }});
      for (var _i = 0; _i < thatbookmark.length; _i++) {
        await this.BookmarkRepository.remove(thatbookmark[_i]);
      }
      
      const time =  new Date();
      const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
      const ID = new ObjectID(portId);
      const portpic =  await this.portfolioPictureRepository.findOne({where:{ PortId: port._id }});

      for (var _i = 0; _i < port.ResumeId.length; _i++) {
        const resume =  await this.resumeModel.findOne({_id: port.ResumeId[_i] });
        let copy = JSON.parse(JSON.stringify(resume));
        await this.resumeModel.remove(resume);
        var move = false;
        for (var _j = 0; _j < copy.portfolios.length-1; _j++) {
          if (copy.portfolios[_j]._id == portId || move == true || copy.portfolios[_j]._id == ID) 
          {
            move = true;
            copy.portfolios[_j] = copy.portfolios[_j+1];
          }
        }
        copy.portfolios.pop();
        copy.last_modified.push(isoTime);
        copy.modified_by.push("automatic system");
        await this.resumeModel.create(copy);
      }

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
    if (port && port.UserId === userId) {
      const portpic =  await this.portfolioPictureRepository.findOne({where:{ PortId: portid }});
      const time =  new Date();
      const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
      const portfoliopic = new PortfolioPicture();
      const subportfoliopic = new PortfolioPicture();
      portfoliopic._id = portpic._id;
      subportfoliopic._id =  portpic._id;
      portfoliopic.create_time=portpic.create_time;
      portfoliopic.last_modified=portpic.last_modified;
      portfoliopic.PortId=portpic.PortId;
      portfoliopic.last_modified.push(isoTime)
      portfoliopic.Pic = portpic.Pic;
      portfoliopic.Description = portpic.Description;
      
      const ID = new ObjectID(portId);

      await this.portfolioPictureRepository.remove(portpic);
      portfoliopic.PortId = portid;
      
      var portpic_arr = [];
      
      if (CreateDto.Port_Tag != null)
        port.Port_Tag = CreateDto.Port_Tag;
      if (CreateDto.Port_Privacy != null)
        port.Port_Privacy = CreateDto.Port_Privacy;
      //---------------------------
      if (CreateDto.Port_Name != null)
        port.Port_Name = CreateDto.Port_Name;
      if (CreateDto.Port_Info != null)
        port.Port_Info = CreateDto.Port_Info;
      if (CreateDto.Port_Date != null)
        port.Port_Date = CreateDto.Port_Date;
      //---------------------------
      if (CreateDto.Pic != null)
        portfoliopic.Pic = CreateDto.Pic;
      if (CreateDto.Description != null)
        portfoliopic.Description =  CreateDto.Description;

      subportfoliopic.Pic = portfoliopic.Pic;
      subportfoliopic.Description = portfoliopic.Description;
      portpic_arr.push(subportfoliopic)
      port.portfolioPictures = portpic_arr;

      for (var _i = 0; _i < port.ResumeId.length; _i++) {
        const resume =  await this.resumeModel.findOne({_id: port.ResumeId[_i] });
        let copy = JSON.parse(JSON.stringify(resume));
        await this.resumeModel.remove(resume);
        for (var _j = 0; _j < copy.portfolios.length; _j++) {
          if (copy.portfolios[_j].id == ID || copy.portfolios[_j].id == portId )
          {
            copy.portfolios[_j].Port_Tag = port.Port_Tag;
            copy.portfolios[_j].Port_Privacy = port.Port_Privacy;
            copy.portfolios[_j].Port_Name = port.Port_Name
            copy.portfolios[_j].Port_Info= port.Port_Info
            copy.portfolios[_j].Port_Date = port.Port_Date
            copy.portfolios[_j].portfolioPictures = port.portfolioPictures
          }
        }
        copy.last_modified.push(isoTime);
        copy.modified_by.push("automatic system");
        await this.resumeModel.create(copy);
      }

      await this.portfolioPictureRepository.save(portfoliopic);
      return await this.portModel.create(port);
    }
    throw new HttpException({
      status: HttpStatus.UNAUTHORIZED,
      error: 'Can not Update Other Data',
    }, HttpStatus.UNAUTHORIZED);
  }
  async updatePortP(CreateDto: CreatePortfolioDto,portId:string, userId:string){
    const portid = new ObjectID(portId);
    const port =  await this.portModel.findById(portid);
    const portpic =  await this.portfolioPictureRepository.findOne({where:{ PortId: portid }});
    
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
    const portfoliopic = new PortfolioPicture();
    portfoliopic.create_time=portpic.create_time;
    portfoliopic.last_modified=portpic.last_modified;
    portfoliopic.last_modified.push(isoTime)
    portfoliopic.Pic = portpic.Pic;
    portfoliopic.Description =  portpic.Description;

    await this.portfolioPictureRepository.remove(portpic);
    portfoliopic.PortId = portid;
    
    var portpic_arr = [];
    if (port && port.UserId === userId) {
        port.Port_Tag = port.Port_Tag;
        port.Port_Privacy = CreateDto.Port_Privacy;
        port.Port_Name = port.Port_Name;
        port.Port_Info = port.Port_Info;
        port.Port_Date = port.Port_Date;
      portpic_arr.push(portfoliopic)
      port.portfolioPictures = portpic_arr;
      await this.portfolioPictureRepository.save(portfoliopic);
      return await this.portModel.create(port);
    }
  }

  async sortport(userId:string, sort:string){
    const arr_user_port=await this.portModel.find({UserId : userId});
    const arr_sort=[];
    const arr_dic={};
    const resut=[];
    const Datess={"มกราคม":1,
                "กุมภาพันธ์":2,
                "มีนาคม":3,
                "เมษายน":4,
                "พฤษภาคม":5,
                "มิถุนายน":6,
                "กรกฎาคม":7,
                "สิงหาคม":8,
                "กันยายน":9,
                "ตุลาคม":10,
                "พฤศจิกายน":11,
                "ธันวาคม":12
              }

    if(sort=="createTime"){
      for (var _i = 0; _i < arr_user_port.length; _i++) {
        const user_port=arr_user_port[_i].create_time

        const y=user_port.split(' ');
        const t=y[3].split(':');
        const tmp=Number(y[0])*10000+Datess[y[1]]*1000000+Number(y[2])*100000000+Number(t[0])*100+Number(t[1]);
        //return "f"

        if(arr_dic[tmp]==null){
          arr_sort.push(tmp);
          arr_dic[tmp]=_i;
        }else{
          arr_sort.push(tmp+1/10);
          arr_dic[tmp+1/10]=_i;
        }
      }
    }else if(sort=="ascendingOrder"||sort=="descendingOrder"){
      for (var _i = 0; _i < arr_user_port.length; _i++) {
        const user_port=arr_user_port[_i].Port_Date
        const y=user_port.split('/').map(Number);
        const dum=new String(y[2])
        const tmp2=Number(dum[0]+dum[2]+dum[3])
        y[2]=Number(tmp2)
        //return y[2]
        //return [tmp2,dum,y[2]]
        //const tmp=y[0]+y[1]*100+y[2]*10000;

        const user_port2=arr_user_port[_i].create_time

        const y2=user_port2.split(' ');
        const t2=y2[3].split(':');
        const tmp=y[0]+y[1]*100+y[2]*10000+Number(y2[0])/10000+Datess[y2[1]]/100+Number(t2[0])/1000000+Number(t2[1])/100000000+1/1000000000;

        if(arr_dic[tmp]==null){
          arr_sort.push(tmp);
          arr_dic[tmp]=_i;
        }else{
          arr_sort.push(tmp+1/1000000000);
          arr_dic[tmp+1/1000000000]=_i;
        }
      }
    }
    


    arr_sort.sort();
    if (sort=="createTime"||sort=="descendingOrder"){
      arr_sort.reverse()
    }


    for (var _i = 0; _i < arr_user_port.length; _i++) {
      const key= arr_dic[arr_sort[_i]]
      resut.push(arr_user_port[key])
    }
    //return [resut,arr_dic]
    return resut;

  }

  async getportowner(userId:string ){
    return  this.portModel.find({UserId : userId});
  }

  async getportother(userId:string ){
    return  this.portModel.find({$and: [ {UserId : userId }, { $or: [ {Port_Privacy : "Public"} , {Port_Privacy : "Members"} ] } ]});
  }

  async getportguest(userId:string ){
    return  this.portModel.find({$and: [ {UserId : userId }, { Port_Privacy : "Public" } ] });
  }

}
