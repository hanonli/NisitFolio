import { Injectable , HttpException , HttpStatus} from '@nestjs/common';
import { CreateResumeDto } from './dto/myresume.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Resume} from './entity/myresume.entity'
import { ObjectID } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resume2 , ResumeDocument} from './entity/myresume.schema';
import { Portfolio2, PortfolioDocument} from '../portfolio/entity/portfolio.schema';
import { hearderDto } from './dto/haerder.dto';
import { GetResume } from './dto/get_Port.dto';
import { Resume3 } from './entity/myresume2.entity';
import { CreatePortDto } from './dto/get_port2.dto';
import { count } from 'console';
import {Public_resume} from './entity/Color_priv_resume.entity'
import { Public_resume2, Public_resumeDocument } from './entity/Color_priv_resume.schema';
import { object, string } from 'joi';


@Injectable()
export class MyResumeService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(Userinfo)
    private userinfoRepository: Repository<Userinfo>,
    @InjectRepository(AdditionalSkill)
    private AdditionalSkillRepository: Repository<AdditionalSkill>,
    @InjectRepository(Certificate)
    private CertificateRepository: Repository<Certificate>,
    @InjectRepository(EducationHistory)
    private EducationHistoryRepository: Repository<EducationHistory>,
    @InjectRepository(WorkHistory)
    private WorkHistoryRepository: Repository<WorkHistory>,
    @InjectRepository(InterestedJob)
    private InterestedJobRepository: Repository<InterestedJob>,
    @InjectRepository(Portfolio)
    private portRepository: Repository<Portfolio>,
    @InjectRepository(PortfolioPicture)
    private portfolioPictureRepository: Repository<PortfolioPicture>,
    @InjectRepository(Resume)
    private resumePictureRepository: Repository<Resume>,
    @InjectModel(Resume2.name) 
    private resumeModel: Model<ResumeDocument>,
    @InjectModel(Portfolio2.name) 
    private portModel: Model<PortfolioDocument>,
    @InjectRepository(Public_resume)
    private Public_resumeRepository: Repository<Public_resume>,
    @InjectModel(Public_resume2.name) 
    private Public_resume2Model: Model<Public_resumeDocument>,
    
    @InjectRepository(Resume3) 
    private Resume3Repository: Repository<Resume3>,

  ) {}

  

  async createResume(CreateDto: CreateResumeDto ,ip:string){
    
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});

    const user = await this.userinfoRepository.findOne({where:{ UserId: CreateDto.UserId }});

    const resume = new Resume(); 
    resume.UserId = CreateDto.UserId;
    resume.Privacy = "Public";
    resume.Owner = user.Firstname + " " + user.Lastname;
    resume.First = user.Firstname;
    resume.Last = user.Lastname;
    resume.AboutMe = user.AboutMe; 
    resume.Email = user.Email2nd;
    resume.Location = user.Country + " " + user.Province + " "+ user.City;
    resume.ProfilePic = user.ProfilePic;

    const jobid = new ObjectID(CreateDto.JobID);

    const interestedjob = await this.InterestedJobRepository.findOne({where:{ _id: jobid }});
    const subinterestedjob = await this.InterestedJobRepository.findOne({select: ["Job_JobName","Job_Objective","Job_Score","Job_SkillName"] , where:{ _id: jobid }});
    resume.interestedJob = subinterestedjob;
    

    const myresume = await this.resumePictureRepository.save(resume);
    const resumeID = myresume._id.toString();
    await this.resumePictureRepository.remove(resume);

    interestedjob.ResumeId.push(resumeID);
    await this.InterestedJobRepository.save(interestedjob)

    const softskill_arr = [];
    for (var _i = 0; _i < CreateDto.SoftSkillID.length; _i++) {
      const softskillid = new ObjectID(CreateDto.SoftSkillID[_i]);
      const additionalskill = await this.AdditionalSkillRepository.findOne({where:{ _id: softskillid }});
      const subadditionalskill = await this.AdditionalSkillRepository.findOne({select: ["AdditionalSkill"] ,where:{ _id: softskillid }});
      softskill_arr.push(subadditionalskill);
      additionalskill.ResumeId.push(resumeID);
      await this.AdditionalSkillRepository.save(additionalskill);
    }
    myresume.additionalSkills = softskill_arr;

    var cert_arr = [];
    for (var _i = 0; _i < CreateDto.CertID.length; _i++) {
      const certid = new ObjectID(CreateDto.CertID[_i]);
      const certificate = await this.CertificateRepository.findOne({where:{ _id: certid }});
      const subcertificate = await this.CertificateRepository.findOne({select: ["CertName","CertPic","CertYear"] ,where:{ _id: certid }});
      cert_arr.push(subcertificate );
      certificate.ResumeId.push(resumeID);
      await this.CertificateRepository.save(certificate)

    }
    myresume.certificates = cert_arr;

    var education_arr = [];
    for (var _i = 0; _i < CreateDto.EducationID.length; _i++) {
      const educationid = new ObjectID(CreateDto.EducationID[_i]);
      const educationhistory = await this.EducationHistoryRepository.findOne({where:{ _id: educationid }});
      const subeducationhistory = await this.EducationHistoryRepository.findOne({select: ["Degree","Academy","Education_End_Year","Facalty","Field_of_study","Grade"] ,where:{ _id: educationid }});
      education_arr.push(subeducationhistory);
      educationhistory.ResumeId.push(resumeID);
      await this.EducationHistoryRepository.save(educationhistory)
    }
    myresume.educationHistorys = education_arr;

    var work_arr = [];
    for (var _i = 0; _i < CreateDto.WorkID.length; _i++) {
      const workid = new ObjectID(CreateDto.WorkID[_i]);
      const workhistory = await this.WorkHistoryRepository.findOne({where:{ _id: workid }});
      const subworkhistory = await this.WorkHistoryRepository.findOne({select: ["Work_Company","Work_End_Month","Work_End_Year","Work_Infomation","Work_JobName","Work_JobType","Work_Salary","Work_Salary_Type","Work_Start_Month","Work_Start_Year"],where:{ _id: workid }});
      work_arr.push(subworkhistory);
      workhistory.ResumeId.push(resumeID);
      await this.WorkHistoryRepository.save(workhistory)
      
    }
    myresume.workHistorys = work_arr;

    var port_arr = [];
    for (var _i = 0; _i < CreateDto.PortID.length; _i++) {
      const portid = new ObjectID(CreateDto.PortID[_i]);
      const portfolio = await this.portModel.findOne({ _id: portid });
      port_arr.push(portfolio);
      portfolio.ResumeId.push(resumeID);
      await this.portModel.create(portfolio)
    }
    myresume.portfolios = port_arr;

    myresume.Color = CreateDto.Color;
    
    const CColor = await this.resumePictureRepository.find({where:{UserId:CreateDto.UserId}});
    for (var _i = 0; _i < CColor.length; _i++) {
      CColor[_i].Color=CreateDto.Color
      await this.resumePictureRepository.save(CColor[_i])
    }



    myresume.create_time =  isoTime;
    myresume.last_modified =  [isoTime] ;
    myresume.modified_by = [ip];
    const ObjID = new ObjectID(resumeID);
    myresume._id=ObjID;
    return await this.resumePictureRepository.save(myresume);
    //*/
  }
  async getResumeheader(UserID:string ){

    const get_header=new hearderDto;
    
    const id = new ObjectID(UserID);
    const id2 = new ObjectID(id);
    const account=await this.accountRepository.findOne({where:{_id:id2}});
    const userinfo=await this.userinfoRepository.findOne({where:{UserId:UserID}});
    get_header.Email=account.Email;
    get_header.Firstname=userinfo.Firstname;
    get_header.Lastname=userinfo.Lastname;
    get_header.ProfilePic=account.ProfilePic;
    get_header.Country=userinfo.Country;
    get_header.City=userinfo.City;
    get_header.AboutMe=userinfo.AboutMe;
    get_header.Province=userinfo.Province;
    const get_arr=[];
    const k=await this.InterestedJobRepository.find({where:{UserId:UserID}});
    for (var _i = 0; _i < k.length; _i++) {
      get_arr.push(k[_i].Job_JobName);
    }
    get_header.Job_JobName=get_arr;
    return get_header;
    
  }

  async getResume(resumeId:string ){
    const id = new ObjectID(resumeId);
    
    const thisx = await this.Resume3Repository.findOne({where:{_id:id}});
    const thisy = new GetResume;

    thisy.UserId=thisx.UserId
    thisy.Privacy=thisx.Privacy
    thisy.Owner=thisx.Owner
    thisy.AboutMe=thisx.AboutMe
    thisy.interestedJob=thisx.interestedJob
    thisy.certificates=thisx.certificates
    thisy.educationHistorys=thisx.educationHistorys
    thisy.workHistorys=thisx.workHistorys
    thisy.portfolios=thisx.portfolios
    thisy.Color=thisx.Color
    thisy.create_time=thisx.create_time
    thisy.last_modified=thisx.last_modified
    thisy.modified_by=thisx.modified_by
    thisy.ProfilePic=thisx.ProfilePic
    thisy.Email=thisx.Email
    thisy.First=thisx.First
    thisy.Last=thisx.Last
    thisy.Location = thisx.Location

    const userid=thisx.UserId;

    const userseven = await this.userinfoRepository.findOne({where:{UserId:userid}});
    
    thisy.Province= userseven.Province
    thisy.Country=userseven.Country
    thisy.City=userseven.City
    

    return thisy
    
  }

  async getResumebyUser(userId:string ){
    return this.resumeModel.find({UserId : userId});
  }


  async removeResume(resumeId:string, userId:string){
    const resumeid = new ObjectID(resumeId);
    const resume =  await this.resumePictureRepository.findOne({where:{ _id: resumeid }});
  
    if (resume && resume.UserId === userId) {
      return await this.resumePictureRepository.remove(resume);
    }
    
    throw new HttpException({
      status: HttpStatus.UNAUTHORIZED,
      error: 'Can not Delete Other Data',
    }, HttpStatus.UNAUTHORIZED);
  }

  async updateResume(CreateDto: CreateResumeDto ,resumeId:string, userId:string,ip:string){
    
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});

    const resumeid = new ObjectID(resumeId);
    const resume =  await this.resumeModel.findOne({_id: resumeid });
    
    if (resume && resume.UserId === userId) {
      //---------softskill
      if (CreateDto.SoftSkillID != null){
        const softskill_arr = [];

        const old_softskill = resume.additionalSkills;
        const old_softskill_id_arr=[]
        for (var _i = 0; _i < old_softskill.length; _i++) {
          old_softskill_id_arr.push(old_softskill[_i].id.toString())
        }

        for (var _i = 0; _i < CreateDto.SoftSkillID.length; _i++) {
          const softskillid = new ObjectID(CreateDto.SoftSkillID[_i]);
          const additionalskill = await this.AdditionalSkillRepository.findOne({where:{ _id: softskillid }});
          if (additionalskill.ResumeId.includes(resumeId) == false){
            additionalskill.ResumeId.push(resumeId);
          }
          else{
            old_softskill_id_arr.splice(old_softskill_id_arr.indexOf(softskillid.toString()),1);
          }
          const subAdditionalskill = new AdditionalSkill();
          subAdditionalskill.id= additionalskill.id;
          subAdditionalskill.AdditionalSkill = additionalskill.AdditionalSkill;
          subAdditionalskill.Type = additionalskill.Type;
          softskill_arr.push(subAdditionalskill);
          await this.AdditionalSkillRepository.save(additionalskill);
        }
        if(old_softskill_id_arr.length!=0){
          for (var _i = 0; _i < old_softskill_id_arr.length; _i++) {
            const edit_softskill=await this.AdditionalSkillRepository.findOne({where:{ _id: new ObjectID(old_softskill_id_arr[_i]) }});
            const tmp=edit_softskill.ResumeId.indexOf(resumeId)
            edit_softskill.ResumeId.splice(tmp,1)
            await this.AdditionalSkillRepository.save(edit_softskill);
          }
        }
        resume.additionalSkills = softskill_arr;
      }
      //--------------------------Cer
      if (CreateDto.CertID != null){
        var cert_arr = [];

        const old_cert = resume.certificates;
        const old_cert_id_arr=[]
        for (var _i = 0; _i < old_cert.length; _i++) {
          old_cert_id_arr.push(old_cert[_i].id.toString())
        }

        for (var _i = 0; _i < CreateDto.CertID.length; _i++) {
          const certid = new ObjectID(CreateDto.CertID[_i]);
          const certificate = await this.CertificateRepository.findOne({where:{ _id: certid }});
          if (certificate.ResumeId.includes(resumeId) == false){
            certificate.ResumeId.push(resumeId);
          }

          else{
            old_cert_id_arr.splice(old_cert_id_arr.indexOf(certid.toString()),1);
          }

          const subCertificate = new Certificate();
          subCertificate.id= certificate.id;
          subCertificate.CertName = certificate.CertName;
          subCertificate.CertPic = certificate.CertPic;
          subCertificate.CertYear = certificate.CertYear;
          cert_arr.push(subCertificate);
          await this.CertificateRepository.save(certificate);
        }

        if(old_cert_id_arr.length!=0){
          for (var _i = 0; _i < old_cert_id_arr.length; _i++) {
            const edit_C=await this.CertificateRepository.findOne({where:{ _id: new ObjectID(old_cert_id_arr[_i]) }});
            const tmp=edit_C.ResumeId.indexOf(resumeId)
            edit_C.ResumeId.splice(tmp,1)
            await this.CertificateRepository.save(edit_C);
          }
        }

        resume.certificates = cert_arr;
      }

      //------------------ED
      if (CreateDto.EducationID != null){
        var education_arr = [];

        const old_ED = resume.educationHistorys;
        //return old_ED
        const old_ED_id_arr=[]
        for (var _i = 0; _i < old_ED.length; _i++) {
          old_ED_id_arr.push(old_ED[_i].id.toString())
        }
        for (var _i = 0; _i < CreateDto.EducationID.length; _i++) {
          const educationid = new ObjectID(CreateDto.EducationID[_i]);
          const educationhistory = await this.EducationHistoryRepository.findOne({where:{ _id: educationid }});
          if (educationhistory.ResumeId.includes(resumeId) == false){
            educationhistory.ResumeId.push(resumeId);
          }

          else{
            old_ED_id_arr.splice(old_ED_id_arr.indexOf(educationid.toString()),1);
          }

          const subEducationhistory = new EducationHistory();
          subEducationhistory.id= educationhistory.id;
          subEducationhistory.Degree = educationhistory.Degree;
          subEducationhistory.Academy = educationhistory.Academy;
          subEducationhistory.Education_End_Year = educationhistory.Education_End_Year;
          subEducationhistory.Facalty = educationhistory.Facalty;
          subEducationhistory.Field_of_study = educationhistory.Field_of_study;
          subEducationhistory.Grade = educationhistory.Grade;
          education_arr.push(subEducationhistory);
          await this.EducationHistoryRepository.save(educationhistory);
        }

        if(old_ED_id_arr.length!=0){
          for (var _i = 0; _i < old_ED_id_arr.length; _i++) {
            const edit_ED=await this.EducationHistoryRepository.findOne({where:{ _id: new ObjectID(old_ED_id_arr[_i]) }});
            const tmp=edit_ED.ResumeId.indexOf(resumeId)
            edit_ED.ResumeId.splice(tmp,1)
            await this.EducationHistoryRepository.save(edit_ED);
          }
        }

        resume.educationHistorys = education_arr;
      }

      
      //-----------WH
      if (CreateDto.WorkID != null){
        var work_arr = [];

        const old_WH = resume.workHistorys;
        const old_WH_id_arr=[]
        for (var _i = 0; _i < old_WH.length; _i++) {
          old_WH_id_arr.push(old_WH[_i].id.toString())
        }

        for (var _i = 0; _i < CreateDto.WorkID.length; _i++) {
          const workid = new ObjectID(CreateDto.WorkID[_i]);
          const workhistory = await this.WorkHistoryRepository.findOne({where:{ _id: workid }});
          if ( workhistory.ResumeId.includes(resumeId) == false){
            workhistory.ResumeId.push(resumeId);
          }

          else{
            old_WH_id_arr.splice(old_WH_id_arr.indexOf(workid.toString()),1);
          }

          const subWorkhistory = new WorkHistory();
          subWorkhistory.id= workhistory.id;
          subWorkhistory.Work_Company = workhistory.Work_Company;
          subWorkhistory.Work_End_Month = workhistory.Work_End_Month;
          subWorkhistory.Work_End_Year =  workhistory.Work_End_Year;
          subWorkhistory.Work_Infomation = workhistory.Work_Infomation;
          subWorkhistory.Work_JobName = workhistory.Work_JobName;
          subWorkhistory.Work_JobType = workhistory.Work_JobType;
          subWorkhistory.Work_Salary = workhistory.Work_Salary;
          subWorkhistory.Work_Salary_Type = workhistory.Work_Salary_Type;
          subWorkhistory.Work_Start_Month = workhistory.Work_Start_Month;
          subWorkhistory.Work_Start_Year = workhistory.Work_Start_Year;
          work_arr.push(subWorkhistory);
          await this.WorkHistoryRepository.save(workhistory);
        }

        if(old_WH_id_arr.length!=0){
          for (var _i = 0; _i < old_WH_id_arr.length; _i++) {
            const edit_WH=await this.WorkHistoryRepository.findOne({where:{ _id: new ObjectID(old_WH_id_arr[_i]) }});
            const tmp=edit_WH.ResumeId.indexOf(resumeId)
            edit_WH.ResumeId.splice(tmp,1)
            await this.WorkHistoryRepository.save(edit_WH);
          }
        }

        resume.workHistorys = work_arr;
      }
      //-----------------------Port
      if (CreateDto.PortID != null){
        var port_arr = [];

        const old_Port = resume.portfolios;
        const old_Port_id_arr=[]
        for (var _i = 0; _i < old_Port.length; _i++) {
          old_Port_id_arr.push(old_Port[_i]._id)
        }

        for (var _i = 0; _i < CreateDto.PortID.length; _i++) {
          const portid = new ObjectID(CreateDto.PortID[_i]);
          const portfolio = await this.portModel.findOne({ _id: portid });
          const portpic = await this.portfolioPictureRepository.findOne({select: ["Description","Pic"],where:{ PortId: portid }});
          const subportfolio = new Portfolio();
          subportfolio.Port_Name = portfolio.Port_Name;
          subportfolio.Port_Privacy = portfolio.Port_Privacy ;
          subportfolio.Port_Tag = portfolio.Port_Tag;
          subportfolio.Port_Info = portfolio.Port_Info;
          subportfolio.Port_Date = portfolio.Port_Date;
          subportfolio.id  = portfolio.id;
          subportfolio.portfolioPictures = [portpic];
          if ( portfolio.ResumeId.includes(resumeId) == false){
            portfolio.ResumeId.push(resumeId);
          }

          else{
            old_Port_id_arr.splice(old_Port_id_arr.indexOf(portid),1);
          }

          port_arr.push(subportfolio);
          await this.portModel.create(portfolio);
        }

        if(old_Port_id_arr.length!=0){
          for (var _i = 0; _i < old_Port_id_arr.length; _i++) {
            const edit_Port=await this.portModel.findOne({where:{ _id: new ObjectID(old_Port_id_arr[_i]) }});
            const tmp=edit_Port.ResumeId.indexOf(resumeId)
            edit_Port.ResumeId.splice(tmp,1)
            await this.portModel.create(edit_Port);
          }
        }

        resume.portfolios = port_arr;
      }
      //------------IJ
      if (CreateDto.JobID != null){
        var job_arr = [];

        const old_IJ = resume.interestedJob;
        const old_IJ_id_arr=[]
        for (var _i = 0; _i < old_IJ.length; _i++) {
          old_IJ_id_arr.push(old_IJ[_i]._id.toString())
        }

        const jobid = new ObjectID(CreateDto.JobID);
        const interestedjob = await this.InterestedJobRepository.findOne({where:{ _id: jobid }});
        if (  interestedjob.ResumeId.includes(resumeId) == false){
          interestedjob.ResumeId.push(resumeId);
        }

        else{
          old_IJ_id_arr.splice(old_IJ_id_arr.indexOf(jobid.toString()),1);
        }

        job_arr.push(interestedjob);
        await this.InterestedJobRepository.save(interestedjob);
        resume.interestedJob = job_arr;


        if(old_IJ_id_arr.length!=0){
          for (var _i = 0; _i < old_IJ_id_arr.length; _i++) {
            const edit_IJ=await this.InterestedJobRepository.findOne({where:{ _id: new ObjectID(old_IJ_id_arr[_i]) }});
            const tmp=edit_IJ.ResumeId.indexOf(resumeId)
            edit_IJ.ResumeId.splice(tmp,1)
            await this.InterestedJobRepository.save(edit_IJ);
          }

        }
      }

      if(CreateDto.Resume_Privacy!=null){
        resume.Privacy = CreateDto.Resume_Privacy;
      }
        resume.Color = CreateDto.Color;
        const CColor = await this.resumePictureRepository.find({where:{UserId:userId}});
        for (var _i = 0; _i < CColor.length; _i++) {
          CColor[_i].Color=CreateDto.Color
        await this.resumePictureRepository.save(CColor[_i])
    }
    //*/
      resume.last_modified.push(isoTime);
      resume.modified_by.push(ip);
      return await this.resumeModel.create(resume);
    }
    
    throw new HttpException({
      status: HttpStatus.UNAUTHORIZED,
      error: 'Can not Patch Other Data',
    }, HttpStatus.UNAUTHORIZED);
  }

  async getportowner(userId:string ){
    var res_arr1 = [];
    var res_arr2 = [];
    var res_arr3 = [];
    var res_arr = [];
    const resume = await this.resumeModel.find({UserId : userId});
    for (var _i = 0; _i < resume.length; _i++) 
    {
      for (var _j = 0; _j < resume[_i].portfolios.length; _j++) 
      {
        if (_i == 0)
          res_arr1.push(resume[_i].portfolios[_j]);
        if (_i == 1)
          res_arr2.push(resume[_i].portfolios[_j]);
        if (_i == 2)
          res_arr3.push(resume[_i].portfolios[_j]);
      }
    }
    res_arr.push(res_arr1);
    res_arr.push(res_arr2);
    res_arr.push(res_arr3);
    return res_arr;
  }

  async getportother(userId:string ){
    var res_arr1 = [];
    var res_arr2 = [];
    var res_arr3 = [];
    var res_arr = [];
    const resume = await this.resumeModel.find({UserId : userId});
    for (var _i = 0; _i < resume.length; _i++) 
    {
      for (var _j = 0; _j < resume[_i].portfolios.length; _j++) 
      {
        if ( _i == 0 && ((resume[_i].portfolios[_j].Port_Privacy == "Public") ||  (resume[_i].portfolios[_j].Port_Privacy == "Members")) )
          res_arr1.push(resume[_i].portfolios[_j]);
        if ( _i == 1 && ((resume[_i].portfolios[_j].Port_Privacy == "Public") ||  (resume[_i].portfolios[_j].Port_Privacy == "Members")) )
          res_arr2.push(resume[_i].portfolios[_j]);
        if ( _i == 2 && ((resume[_i].portfolios[_j].Port_Privacy == "Public") ||  (resume[_i].portfolios[_j].Port_Privacy == "Members")) )
          res_arr3.push(resume[_i].portfolios[_j]);
      }

    }
    res_arr.push(res_arr1);
    res_arr.push(res_arr2);
    res_arr.push(res_arr3);
    return res_arr;
  }

  async getportguest(userId:string ){
    var res_arr1 = [];
    var res_arr2 = [];
    var res_arr3 = [];
    var res_arr = [];
    const resume = await this.resumeModel.find({UserId : userId});
    for (var _i = 0; _i < resume.length; _i++) 
    {
      for (var _j = 0; _j < resume[_i].portfolios.length; _j++) 
      {
        if ( _i == 0 && resume[_i].portfolios[_j].Port_Privacy == "Public"  )
          res_arr1.push(resume[_i].portfolios[_j]);
        if ( _i == 1 && resume[_i].portfolios[_j].Port_Privacy == "Public"  )
          res_arr2.push(resume[_i].portfolios[_j]);
        if ( _i == 2 && resume[_i].portfolios[_j].Port_Privacy == "Public"  )
          res_arr3.push(resume[_i].portfolios[_j]);
      }

    }
    res_arr.push(res_arr1);
    res_arr.push(res_arr2);
    res_arr.push(res_arr3);
    return res_arr;
  }
  async GetResume3(UserId:string){
    const result = new CreatePortDto;
      
      
    const userid = new ObjectID(UserId);
    const account=await this.accountRepository.findOne({where:{_id:userid}});
    //return [userid,UserId]this.resumeModel.find({UserId : userId});
    
    const resumeColor=(await this.resumeModel.findOne({UserId:UserId}));
    result.Color_ResumeId=resumeColor.Color;
    
    

    const softskill_arr=[];
    const softskill_id_arr=[];
    const kuy=[];
    const additionalskill=await this.AdditionalSkillRepository.find({where:{UserId:UserId}});
    for (var _i = 0; _i < additionalskill.length; _i++) {
      softskill_arr.push(additionalskill[_i].AdditionalSkill);
      softskill_id_arr.push(additionalskill[_i].id.toString());
      kuy.push(additionalskill[_i].ResumeId);
    }
    result.SoftSkill=softskill_arr;
    result.AdditionalSkill_ResumeId=kuy
    
    result.AdditionalSkill_id=softskill_id_arr
    //return result
    
    const CertName_arr=[];
    const CertPic_arr=[];
    const CertYear_arr=[];
    const CertId_arr=[];
    const kuy2=[];  
    const Certificate=await this.CertificateRepository.find({where:{UserId:UserId}});

    const Certificate_sortlist=[];
    const Certificate_Dictionary = {};

    for (var _i = 0; _i < Certificate.length; _i++) {

      var Certificate_EndYear=Certificate[_i].CertYear;
      if(Certificate_Dictionary[Certificate_EndYear]==null){
        Certificate_sortlist.push(Certificate_EndYear);
        Certificate_Dictionary[Certificate_EndYear]=_i;
      }else{
        while(Certificate_Dictionary[Certificate_EndYear]!=null){
          Certificate_EndYear=Certificate_EndYear+0.01
        }
        Certificate_sortlist.push(Certificate_EndYear);
        Certificate_Dictionary[Certificate_EndYear]=_i;
      }
    }
    Certificate_sortlist.sort();
    Certificate_sortlist.reverse();
    for (var _i = 0; _i < Certificate_sortlist.length; _i++) {
      const key_Certificate_sortlist=Certificate_sortlist[_i];
      const Certificate_NUM_Dictionary=Certificate_Dictionary[key_Certificate_sortlist];
      CertName_arr.push(Certificate[Certificate_NUM_Dictionary].CertName);
      CertPic_arr.push(Certificate[Certificate_NUM_Dictionary].CertPic);
      CertYear_arr.push(Certificate[Certificate_NUM_Dictionary].CertYear);
      CertId_arr.push(Certificate[Certificate_NUM_Dictionary].id.toString());
      kuy2.push(Certificate[Certificate_NUM_Dictionary].ResumeId);
    }
    
    result.CertName=CertName_arr;
    result.CertPic=CertPic_arr;
    result.CertYear=CertYear_arr;
    result.Certificate_ResumeId=kuy2;
    
    result.Certificate_id=CertId_arr;
    
    const Degree_arr=[];
    const Facalty_arr=[];
    const Field_of_study_arr=[];
    const Academy_arr=[];
    const Grade_arr=[];
    const Education_End_Year_arr=[];
    const EDId_arr=[];
    const educationHistory=await this.EducationHistoryRepository.find({where:{UserId:UserId}});
    const educationHistory_sortlist=[];
    const educationHistory_Dictionary={};
    const kuy3 = [];

    for (var _i = 0; _i < educationHistory.length; _i++) {
      var educationHistory_End_Year=Number(educationHistory[_i].Education_End_Year);
      if(educationHistory_Dictionary[educationHistory_End_Year]==null){
        educationHistory_sortlist.push(educationHistory_End_Year);
        educationHistory_Dictionary[educationHistory_End_Year]=_i;
      }else{
        while(educationHistory_Dictionary[educationHistory_End_Year]!=null){
          educationHistory_End_Year=educationHistory_End_Year+0.01
        }
        educationHistory_sortlist.push(educationHistory_End_Year);
          educationHistory_Dictionary[educationHistory_End_Year]=_i;
      }
    }
    educationHistory_sortlist.sort();
    educationHistory_sortlist.reverse();

    for (var _i = 0; _i < educationHistory.length; _i++) {
      const key_educationHistory_Dictionary=educationHistory_sortlist[_i];
      const educationHistory_Num_sort=educationHistory_Dictionary[key_educationHistory_Dictionary];
      Degree_arr.push(educationHistory[educationHistory_Num_sort].Degree);
      Facalty_arr.push(educationHistory[educationHistory_Num_sort].Facalty);
      Field_of_study_arr.push(educationHistory[educationHistory_Num_sort].Field_of_study);
      Academy_arr.push(educationHistory[educationHistory_Num_sort].Academy);
      Grade_arr.push(educationHistory[educationHistory_Num_sort].Grade);
      Education_End_Year_arr.push(educationHistory[educationHistory_Num_sort].Education_End_Year);
      EDId_arr.push(educationHistory[educationHistory_Num_sort].id.toString());
      kuy3.push(educationHistory[educationHistory_Num_sort].ResumeId);
    }
    result.Degree=Degree_arr;
    result.Facalty=Facalty_arr;
    result.Field_of_study=Field_of_study_arr;
    result.Academy=Academy_arr;
    result.Grade=Grade_arr;
    result.Education_End_Year=Education_End_Year_arr;

    result.EducationHistory_ResumeId=kuy3;

    result.EducationHistory_id=EDId_arr;
    
    
    const Work_JobName_arr=[];
    const Work_JobType_arr=[];
    const Company_arr=[];
    const Work_Start_Month_arr=[];
    const Work_End_Month_arr=[];
    const Work_Start_Year_arr=[];
    const Work_End_Year_arr=[];
    const Salary_arr=[];
    const Infomation_arr=[];
    const SalaryType_arr=[];
    const WHId_arr=[];
    const kuy4=[];
    const workHistory =await this.WorkHistoryRepository.find({where:{UserId:UserId}});
    //return workHistory;

    const workHistory_sortlist=[];
    const workHistory_Dictionary={};

    for (var _i = 0; _i < workHistory.length; _i++) {
      var workHistory_End=workHistory[_i].Work_End_Year+(workHistory[_i].Work_End_Month/100);
      if(workHistory_Dictionary[workHistory_End]==null){
        workHistory_sortlist.push(workHistory_End);
        workHistory_Dictionary[workHistory_End]=_i;
      }else{
        while(workHistory_Dictionary[workHistory_End]!=null){
          workHistory_End=workHistory_End+0.0001
        }
        workHistory_sortlist.push(workHistory_End);
        workHistory_Dictionary[workHistory_End]=_i;
      }
      
    }
    workHistory_sortlist.sort();
    workHistory_sortlist.reverse();
    //return workHistory_Dictionary;
    
    for (var _i = 0; _i < workHistory.length; _i++) {
      const key_workHistory_Dictionary=workHistory_sortlist[_i];
      const workHistory_Num_Sort=workHistory_Dictionary[key_workHistory_Dictionary];

      Work_JobName_arr.push(workHistory[workHistory_Num_Sort].Work_JobName);
      Work_JobType_arr.push(workHistory[workHistory_Num_Sort].Work_JobType);
      Company_arr.push(workHistory[workHistory_Num_Sort].Work_Company);
      Work_Start_Month_arr.push(workHistory[workHistory_Num_Sort].Work_Start_Month);
      Work_End_Month_arr.push(workHistory[workHistory_Num_Sort].Work_End_Month);
      Work_Start_Year_arr.push(workHistory[workHistory_Num_Sort].Work_Start_Year);
      Work_End_Year_arr.push(workHistory[workHistory_Num_Sort].Work_End_Year);
      Salary_arr.push(workHistory[workHistory_Num_Sort].Work_Salary);
      Infomation_arr.push(workHistory[workHistory_Num_Sort].Work_Infomation);
      SalaryType_arr.push(workHistory[workHistory_Num_Sort].Work_Salary_Type);
      WHId_arr.push(workHistory[workHistory_Num_Sort].id.toString());
      kuy4.push(workHistory[workHistory_Num_Sort].ResumeId);
    }
    
    result.Work_JobName=Work_JobName_arr;
    result.Work_JobType=Work_JobType_arr;
    result.Company=Company_arr;
    result.Work_Start_Month=Work_Start_Month_arr;
    result.Work_End_Month=Work_End_Month_arr;
    result.Work_Start_Year=Work_Start_Year_arr;
    result.Work_End_Year=Work_End_Year_arr;
    result.Salary=Salary_arr;
    result.Infomation=Infomation_arr;
    result.SalaryType=SalaryType_arr;
    result.WorkHistory_ResumeId=kuy4;

    result.WorkHistory_id=WHId_arr;
    
    const Job_Objective_arr=[];
    const Job_Score_arr=[];
    const Job_JobName_arr=[];
    const Job_SkillName_arr=[];
    const  InterestedJob_id_arr=[];
    const kuy5=[];
    const IJ=await this.InterestedJobRepository.find({where:{UserId:UserId}});
    for (var _i = 0; _i < IJ.length; _i++) {
      Job_Objective_arr.push(IJ[_i].Job_Objective);
      Job_Score_arr.push(IJ[_i].Job_Score);
      Job_JobName_arr.push(IJ[_i].Job_JobName);
      Job_SkillName_arr.push(IJ[_i].Job_SkillName);
      InterestedJob_id_arr.push(IJ[_i]._id.toString());
      kuy5.push(IJ[_i].ResumeId);

    }
    result.InterestedJob_id=kuy5;

    result.Job_Objective=Job_Objective_arr;
    result.Job_Score=Job_Score_arr;
    result.Job_JobName=Job_JobName_arr;
    result.Job_SkillName=Job_SkillName_arr;
    result.InterestedJob_id=InterestedJob_id_arr;

    const kuy6=[];
    const resu=await this.resumePictureRepository.find({where:{UserId:UserId}});
    for (var _i = 0; _i < resu.length; _i++) {
      kuy6.push(resu[_i]._id.toString());
    }
    result.Resume_id=kuy6

    
    
    return result;
  }
  async getResumeUnbase64(userId:string ){
    return this.resumePictureRepository.find({select: ["_id","UserId","Owner","First","Last","Location","ProfilePic","AboutMe","Email","Privacy","interestedJob","additionalSkills","certificates","educationHistorys","workHistorys","portfolios","create_time","last_modified","modified_by"],where:{UserId : userId}});
    
  }
  
}
