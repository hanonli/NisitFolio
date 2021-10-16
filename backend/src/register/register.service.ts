import { Injectable ,HttpException,HttpStatus,BadRequestException, ConsoleLogger} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Md5 } from 'ts-md5/dist/md5';
import { ObjectID } from 'mongodb';
import { XMLHttpRequest } from 'xmlhttprequest-ts';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory, PortfolioPicture, Resume, UserJobSkill } from './entity/Register.entity'
import { CreateRegisDto } from './dto/create-register.dto';
import { EmailConfirmationService } from '../emailConfirmation/emailConfirmation.service';
import { Resume2 , ResumeDocument} from '../myresume/entity/myresume.schema';
import { Portfolio2, PortfolioDocument} from '../portfolio/entity/portfolio.schema';

import { JobTitle } from 'src/register/entity/JobTitle.entrity'
import { Skill } from 'src/register/entity/Skill.entrity'
import { HardSkill } from 'src/register/entity/HardSkill.entrity'
import { PatchRegisDto } from './dto/patch-register.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInfoMongoose } from './entity/register.schema';
import { UserInfoDocument } from './entity/register.schema';
import { GetRegisDto } from './dto/get-register.dto';
import { Bookmark } from './entity/bookmark.entity';
import { Portfolio } from '../portfolio/entity/portfolio.entity';
import {PatchRegisDto2} from './dto/patch-register_2.dto';

@Injectable()
export class RegisterService {
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
    @InjectRepository(JobTitle)
    private JobTitleRepository: Repository<JobTitle>,
    @InjectRepository(Skill)
    private SkillRepository: Repository<Skill>,
    @InjectRepository(HardSkill)
    private HardSkillRepository: Repository<HardSkill>,
    @InjectRepository(Portfolio)
    private portfolioRepository: Repository<Portfolio>,
    @InjectRepository(PortfolioPicture)
    private portfolioPictureRepository: Repository<PortfolioPicture>,
    @InjectRepository(Resume)
    private resumeRepository: Repository<Resume>,
    @InjectModel(UserInfoMongoose.name)
    private userInfoModel: Model<UserInfoDocument>,
    @InjectRepository(UserJobSkill)
    private userJobSkillRepository: Repository<UserJobSkill>,
    @InjectRepository(Bookmark)
    private BookmarkRepository: Repository<Bookmark>,
    @InjectModel(Resume2.name) 
    private resumeModel: Model<ResumeDocument>,
    @InjectModel(Portfolio2.name) 
    private portModel: Model<PortfolioDocument>,

    private readonly emailConfirmationService: EmailConfirmationService,
    private httpService: HttpService,

  ) { }

  async createRegis(createDto: CreateRegisDto,ip:string) {
    const time = new Date();
    const isoTime = time.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" });

    const account = new Account();
    account.Email = createDto.Email;
    account.Password = [Md5.hashStr(createDto.Password)];
    account.ProfilePic = createDto.ProfilePic;
    account.Privacy = "Public";
    account.isEmailConfirmed = false;
    account.create_time = isoTime;
    account.last_modified = [isoTime];
    account.last_login = null;
    
    const accountid = (await this.accountRepository.save(account))._id.toString()

    const userinfo = new Userinfo();
    userinfo.UserId = accountid;
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;
    userinfo.AboutMe = createDto.AboutMe;
    userinfo.Email2nd = createDto.Email;
    userinfo.Country = createDto.Country;
    userinfo.Province = createDto.Province;
    userinfo.City = createDto.City;
    userinfo.ProfilePic = createDto.ProfilePic; 
    userinfo.create_time = isoTime ;
    userinfo.last_modified =  [isoTime] ;

    for (var _i = 0; _i < createDto.SoftSkill.length; _i++) {

      const additionalskill = new AdditionalSkill();
      additionalskill.UserId = accountid;
      additionalskill.AdditionalSkill  = createDto.SoftSkill[_i]; 
      additionalskill.create_time = isoTime ;
      additionalskill.last_modified =  [isoTime] ;
      additionalskill.ResumeId =  new Array() ;
      additionalskill.Type = createDto.SoftSkillType[_i]; 
   
      await this.AdditionalSkillRepository.save(additionalskill);
    }
    
    for (var _i = 0; _i < createDto.CertName.length; _i++) {
      const certificate = new Certificate();
      certificate.UserId = accountid;
      certificate.CertName = createDto.CertName[_i]
      certificate.CertPic = createDto.CertPic[_i]
      certificate.CertYear = createDto.CertYear[_i]
      certificate.create_time = isoTime;
      certificate.last_modified = [isoTime];
      certificate.ResumeId = new Array();
      await this.CertificateRepository.save(certificate);
    }

    for (var _i = 0; _i < createDto.Degree.length; _i++) {
      const educationHistory = new EducationHistory();
      educationHistory.UserId = accountid;
      educationHistory.Degree = createDto.Degree[_i];
      educationHistory.Facalty = createDto.Facalty[_i];
      educationHistory.Field_of_study = createDto.Field_of_study[_i];
      educationHistory.Academy = createDto.Academy[_i];
      educationHistory.Grade = createDto.Grade[_i];
      educationHistory.Education_End_Year = createDto.Education_End_Year[_i];
      educationHistory.create_time = isoTime;
      educationHistory.last_modified = [isoTime];
      educationHistory.ResumeId = new Array();
      await this.EducationHistoryRepository.save(educationHistory);
    }

    for (var _i = 0; _i < createDto.Work_JobName.length; _i++) {
      const workHistory = new WorkHistory();
      workHistory.UserId = accountid;
      workHistory.Work_JobName = createDto.Work_JobName[_i];
      workHistory.Work_JobType = createDto.Work_JobType[_i];
      workHistory.Work_Company = createDto.Company[_i];
      workHistory.Work_Start_Month = createDto.Work_Start_Month[_i];
      workHistory.Work_End_Month = createDto.Work_End_Month[_i];
      workHistory.Work_Start_Year = createDto.Work_Start_Year[_i];
      workHistory.Work_End_Year = createDto.Work_End_Year[_i];
      workHistory.Work_Salary = createDto.Salary[_i];
      workHistory.Work_Infomation = createDto.Infomation[_i];
      workHistory.Work_Salary_Type = createDto.SalaryType[_i];
      workHistory.create_time = isoTime;
      workHistory.last_modified = [isoTime];
      workHistory.ResumeId = new Array();
      await this.WorkHistoryRepository.save(workHistory);
    }

    const tag_arr = [];
    let sum_score = 0.00;
    let count_skill = 0;

    for (var _i = 0; _i < createDto.Job_JobName.length; _i++) {

      const resume = new Resume();
      const resumeid = ((await this.resumeRepository.save(resume))._id);
      await this.resumeRepository.remove(resume);
      const interestedJob = new InterestedJob();
      interestedJob.UserId = accountid;
      interestedJob.Job_JobName = createDto.Job_JobName[_i];
      interestedJob.Job_Objective = createDto.Job_Objective[_i];
      interestedJob.Job_Score = createDto.Job_Score[_i];
      interestedJob.Job_SkillName = createDto.Job_SkillName[_i];
      interestedJob.create_time = isoTime;
      interestedJob.last_modified = [isoTime];
      interestedJob.ResumeId = new Array();
      interestedJob.ResumeId.push(resumeid.toString());

      const Parentid = (await this.InterestedJobRepository.save(interestedJob))._id;
      const Parentid_string = Parentid.toString();

      tag_arr.push(createDto.Job_JobName[_i]);
      for (var _j = 0; _j < createDto.Job_Score[_i].length; _j++) {
        const userJobSkill = new UserJobSkill();
        userJobSkill.ParentId = Parentid_string;
        userJobSkill.UserId = accountid;
        userJobSkill.Job_JobName = createDto.Job_JobName[_i];
        userJobSkill.Job_Score = createDto.Job_Score[_i][_j];
        sum_score = sum_score + createDto.Job_Score[_i][_j];
        count_skill = count_skill + 1;
        userJobSkill.Job_SkillName = createDto.Job_SkillName[_i][_j];
        await this.userJobSkillRepository.save(userJobSkill);
      }
      const resume2 = new Resume();
      resume2.UserId = accountid;
      resume2.Privacy = "Private";
      resume2.ProfilePic =  createDto.ProfilePicBase64;
      resume2.Owner =  createDto.Firstname + " " + createDto.Lastname;
      resume2.Location = createDto.Country + " " + createDto.Province + " "+ createDto.City;
      resume2.Color = "#ffce55";
      resume2.Email = createDto.Email;
      resume2.First = createDto.Firstname;
      resume2.Last = createDto.Lastname;
      resume2.interestedJob = new InterestedJob();
      resume2.interestedJob._id = Parentid;
      resume2.interestedJob.Job_Score = interestedJob.Job_Score;
      resume2.interestedJob.Job_JobName = interestedJob.Job_JobName;
      resume2.interestedJob.Job_Objective = interestedJob.Job_Objective;
      resume2.interestedJob.Job_SkillName = interestedJob.Job_SkillName;
      resume2.create_time =  isoTime;
      resume2.last_modified =  [isoTime] ;
      resume2.modified_by = [ip];
      await this.resumeRepository.save(resume2);
    }
    let avg_score = sum_score / count_skill;

    await this.emailConfirmationService.sendVerificationLink(createDto.Email);
    userinfo.AvgScore = avg_score;
    userinfo.totalBookmark = 0;
    userinfo.tags = tag_arr;
    userinfo.countSkill = count_skill;
    return (this.userinfoRepository.save(userinfo));
    
  }

  async findJobTitle() {
    return this.JobTitleRepository.find();
  }

  async findSkill(jobTitle: string) {
    return this.SkillRepository.find({ where: { jobTitle: jobTitle } });
  }

  async findHardSkill(Type: string) {
    return this.HardSkillRepository.find({ where: { Type: Type } });
  }

  async UpdateRegis(patchDto: PatchRegisDto, UserId: string) {
    const time = new Date();
    const isoTime = time.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" });
    const userid = new ObjectID(UserId);
    const acc = await this.accountRepository.findOne({ where: { _id: userid } });



    if (patchDto.Password != null)
      acc.Password.push(Md5.hashStr(patchDto.Password));
    acc.last_modified.push(isoTime);
    if (patchDto.ProfilePic != null)
      acc.ProfilePic = patchDto.ProfilePic;
    if (patchDto.Privacy != null)
      acc.Privacy = patchDto.Privacy;

    await this.accountRepository.save(acc);
  
    const userinfo = await this.userInfoModel.findOne({ UserId: UserId });

    if (patchDto.Firstname || patchDto.Lastname || patchDto.Birthday || patchDto.Gender || patchDto.AboutMe || patchDto.Email2nd || patchDto.Country || patchDto.City || patchDto.Province)
      userinfo.last_modified.push(isoTime);
    if (patchDto.Firstname != null)
      userinfo.Firstname = patchDto.Firstname;
    if (patchDto.Lastname != null)
      userinfo.Lastname = patchDto.Lastname;
    if (patchDto.Birthday != null)
      userinfo.Birthday = patchDto.Birthday;
    if (patchDto.Gender != null)
      userinfo.Gender = patchDto.Gender;
    if (patchDto.AboutMe != null)
      userinfo.AboutMe = patchDto.AboutMe;
    if (patchDto.Email2nd != null)
      userinfo.Email2nd = patchDto.Email2nd;
    if (patchDto.Country != null)
      userinfo.Country = patchDto.Country;
    if (patchDto.Province != null)
      userinfo.Province = patchDto.Province;
    if (patchDto.City != null)
      userinfo.City = patchDto.City;
    if (patchDto.ProfilePic != null)
      userinfo.ProfilePic = patchDto.ProfilePic;

    const resume =  await this.resumeModel.find({UserId: UserId });
    for (var _i = 0; _i < resume.length; _i++) {
      if (patchDto.ProfilePicBase64 || patchDto.Country || patchDto.Province || patchDto.City || patchDto.Firstname || patchDto.Lastname)
      {
        resume[_i].last_modified.push(isoTime);
        resume[_i].modified_by.push("automatic system");
      }
      if (patchDto.ProfilePicBase64 != null)
        resume[_i].ProfilePic =  patchDto.ProfilePicBase64;
      if (patchDto.Country || patchDto.Province || patchDto.City)
        resume[_i].Location = patchDto.Country + " " + patchDto.Province + " " + patchDto.City;
      if (patchDto.Firstname){
        resume[_i].First = patchDto.Firstname;
        resume[_i].Owner = patchDto.Firstname + " " + userinfo.Lastname;
      }
      if (patchDto.Lastname)
        resume[_i].Last = patchDto.Lastname;
        resume[_i].Owner = userinfo.Firstname + " " + patchDto.Lastname;
    }
    await this.resumeModel.create(resume);

    const port = await this.portModel.find({UserId: UserId });
    for (var _i = 0; _i < port.length; _i++) {
      if (patchDto.Firstname || patchDto.Lastname)
      {
        port[_i].last_modified.push(isoTime);
        port[_i].modified_by.push("automatic system");
      }
      if (patchDto.Firstname){
        port[_i].Owner = patchDto.Firstname + " " + userinfo.Lastname;
      }
      if (patchDto.Lastname)
        port[_i].Owner = userinfo.Firstname + " " + patchDto.Lastname;
    }
    await this.portModel.create(port);
    
    return await this.userInfoModel.create(userinfo);

  }

  async DeleteRegis(UserId:string)
  {
    const userid = new ObjectID(UserId);
    const acc = await this.accountRepository.findOne({ where: { _id: userid } });
    await this.accountRepository.remove(acc);
    
    const userinfo =  await this.userinfoRepository.findOne({where:{UserId: UserId }});

    const thatbookmark = await this.BookmarkRepository.find({where:{ id: userinfo.id }});
    for (var _i = 0; _i < thatbookmark.length; _i++) {
      await this.BookmarkRepository.remove(thatbookmark[_i]);
    }
    
    const additionalskill = await this.AdditionalSkillRepository.find({where:{ UserId: UserId}});
    for (var _i = 0; _i < additionalskill.length; _i++) {
      await this.AdditionalSkillRepository.remove(additionalskill[_i]);
    }

    const certificate = await this.CertificateRepository.find({ where: { UserId: UserId } });
    for (var _i = 0; _i < certificate.length; _i++) {
      await this.CertificateRepository.remove(certificate[_i]);
    }

    const educationHistory = await this.EducationHistoryRepository.find({ where: { UserId: UserId } });
    for (var _i = 0; _i < educationHistory.length; _i++) {
      await this.EducationHistoryRepository.remove(educationHistory[_i]);
    }

    const workHistory = await this.WorkHistoryRepository.find({ where: { UserId: UserId } });
    for (var _i = 0; _i < workHistory.length; _i++) {
      await this.WorkHistoryRepository.remove(workHistory[_i]);
    }

    const interestedJob = await this.InterestedJobRepository.find({ where: { UserId: UserId } });
    for (var _i = 0; _i < interestedJob.length; _i++) {
      await this.InterestedJobRepository.remove(interestedJob[_i]);
    }

    const resume = await this.resumeRepository.find({ where: { UserId: UserId } });
    for (var _i = 0; _i < resume.length; _i++) {
      await this.resumeRepository.remove(resume[_i]);
    }

    const port = await this.portfolioRepository.find({ where: { UserId: UserId } });
    for (var _i = 0; _i < port.length; _i++) {
      const portid = port[_i]._id.toString()
      const portpic = await this.portfolioPictureRepository.findOne({ where: { PortId: portid } });
      await this.portfolioPictureRepository.remove(portpic);
      await this.portfolioRepository.remove(port[_i]);
    }

    return await this.userinfoRepository.remove(userinfo);

  }

  async UpdateAdditionalSkill(patchDto: PatchRegisDto, UserId: string, id: string) {
    const time = new Date();
    const isoTime = time.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" });
    const ID = new ObjectID(id);
    const additionalskill = await this.AdditionalSkillRepository.findOne({ where: { _id: ID } });
    if (!additionalskill) {
      throw new BadRequestException('Invalid oject');
    }
    if (additionalskill.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Patch Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
    if (patchDto.SoftSkill && patchDto.SoftSkillType){
      additionalskill.last_modified.push(isoTime);
      additionalskill.AdditionalSkill = patchDto.SoftSkill;
      additionalskill.Type = patchDto.SoftSkillType;
    
      for (var _i = 0; _i < additionalskill.ResumeId.length; _i++) {
        const resume =  await this.resumeModel.findOne({_id: additionalskill.ResumeId[_i] });
        let copy = JSON.parse(JSON.stringify(resume));
        await this.resumeModel.remove(resume);
        for (var _j = 0; _j < copy.additionalSkills.length; _j++) {
          if (copy.additionalSkills[_j].id == ID)
          {
            copy.additionalSkills[_j].AdditionalSkill = patchDto.SoftSkill;
            copy.additionalSkills[_j].Type = patchDto.SoftSkillType;
          }
        }
        copy.last_modified.push(isoTime);
        copy.modified_by.push("automatic system");
        await this.resumeModel.create(copy);
      }
      return await this.AdditionalSkillRepository.save(additionalskill);
    }
    throw new BadRequestException('Dto error');


  }

  async DeleteAdditionalSkill(UserId: string, id: string) {
    const ID = new ObjectID(id);
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
    const additionalskill = await this.AdditionalSkillRepository.findOne({where:{ _id: ID}});
    if (!additionalskill){
      throw new BadRequestException('Invalid oject');
    }
    if (additionalskill.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Delete Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
    
    for (var _i = 0; _i < additionalskill.ResumeId.length; _i++) {
      const resume =  await this.resumeModel.findOne({_id: additionalskill.ResumeId[_i] });
      let copy = JSON.parse(JSON.stringify(resume));
      await this.resumeModel.remove(resume);
      for (var _j = 0; _j < copy.additionalSkills.length; _j++) {
        if (copy.additionalSkills[_j].id == ID)
        {
          copy.additionalSkills[_j] = null;
        }
      }
      copy.last_modified.push(isoTime);
      copy.modified_by.push("automatic system");
      await this.resumeModel.create(copy);
    }

    return await this.AdditionalSkillRepository.remove(additionalskill);
}

  async UpdateCertificate(patchDto: PatchRegisDto, UserId: string, id: string) {
    const time = new Date();
    const isoTime = time.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" });
    const ID = new ObjectID(id);
    const certificate = await this.CertificateRepository.findOne({ where: { _id: ID } });
    if (!certificate) {
      throw new BadRequestException('Invalid oject');
    }
    if (certificate.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Patch Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
    if (patchDto.CertName || patchDto.CertYear || patchDto.CertPic) {
      certificate.last_modified.push(isoTime);
      if (patchDto.CertName)
        certificate.CertName = patchDto.CertName;
      if (patchDto.CertYear)
        certificate.CertYear = patchDto.CertYear;
      if (patchDto.CertPic)
        certificate.CertPic = patchDto.CertPic;
        
      for (var _i = 0; _i < certificate.ResumeId.length; _i++) {
        const resume =  await this.resumeModel.findOne({_id: certificate.ResumeId[_i] });
        let copy = JSON.parse(JSON.stringify(resume));
        await this.resumeModel.remove(resume);
        for (var _j = 0; _j < copy.certificates.length; _j++) {
          if (copy.certificates[_j].id == id)
          {
            copy.certificates[_j].CertName = certificate.CertName;
            copy.certificates[_j].CertYear = certificate.CertYear;
            copy.certificates[_j].CertPic = certificate.CertPic;
          }
        }
        copy.last_modified.push(isoTime);
        copy.modified_by.push("automatic system");
        await this.resumeModel.create(copy);
      }

      return await this.CertificateRepository.save(certificate);
    }
    throw new BadRequestException('Dto error');


  }

  async DeleteCertificate(UserId:string,id:string){
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
    const ID = new ObjectID(id);
    const certificate = await this.CertificateRepository.findOne({ where: { _id: ID } });
    if (!certificate) {
      throw new BadRequestException('Invalid oject');
    }
    if (certificate.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Delete Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
         
    for (var _i = 0; _i < certificate.ResumeId.length; _i++) {
      const resume =  await this.resumeModel.findOne({_id: certificate.ResumeId[_i] });
      let copy = JSON.parse(JSON.stringify(resume));
      await this.resumeModel.remove(resume);
      for (var _j = 0; _j < copy.certificates.length; _j++) {
        if (copy.certificates[_j].id == id)
        {
          copy.certificates[_j] = null;
        }
      }
      copy.last_modified.push(isoTime);
      copy.modified_by.push("automatic system");
      await this.resumeModel.create(copy);
    }
    
    return await this.CertificateRepository.remove(certificate);

  }

  async UpdateEducationHistory(patchDto: PatchRegisDto, UserId: string, id: string) {
    const time = new Date();
    const isoTime = time.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" });
    const ID = new ObjectID(id);
    const educationHistory = await this.EducationHistoryRepository.findOne({ where: { _id: ID } });
    if (!educationHistory) {
      throw new BadRequestException('Invalid oject');
    }
    if (educationHistory.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Patch Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
    if (patchDto.Degree || patchDto.Facalty || patchDto.Field_of_study || patchDto.Academy || patchDto.Grade || patchDto.Education_End_Year) {
      educationHistory.last_modified.push(isoTime);
      if (patchDto.Degree)
        educationHistory.Degree = patchDto.Degree;
      if (patchDto.Facalty)
        educationHistory.Facalty = patchDto.Facalty;
      if (patchDto.Field_of_study)
        educationHistory.Field_of_study = patchDto.Field_of_study;
      if (patchDto.Academy)
        educationHistory.Academy = patchDto.Academy;
      if (patchDto.Grade)
        educationHistory.Grade = patchDto.Grade;
      if (patchDto.Education_End_Year)
        educationHistory.Education_End_Year = patchDto.Education_End_Year;
      
      for (var _i = 0; _i < educationHistory.ResumeId.length; _i++) {
        const resume =  await this.resumeModel.findOne({_id: educationHistory.ResumeId[_i] });
        let copy = JSON.parse(JSON.stringify(resume));
        await this.resumeModel.remove(resume);
        for (var _j = 0; _j < copy.educationHistorys.length; _j++) {
          if (copy.educationHistorys[_j].id == id)
          {
            copy.educationHistorys[_j].Degree = educationHistory.Degree;
            copy.educationHistorys[_j].Facalty = educationHistory.Facalty;
            copy.educationHistorys[_j].Field_of_study  = educationHistory.Field_of_study;
            copy.educationHistorys[_j].Academy = educationHistory.Academy ;
            copy.educationHistorys[_j].Grade = educationHistory.Grade;
            copy.educationHistorys[_j].Education_End_Year = educationHistory.Education_End_Year;
          }
        }
        copy.last_modified.push(isoTime);
        copy.modified_by.push("automatic system");
        await this.resumeModel.create(copy);
      }

      return await this.EducationHistoryRepository.save(educationHistory);
    }
    throw new BadRequestException('Dto error');


  }

  async DeleteEducationHistory(UserId:string,id:string){
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
    const ID = new ObjectID(id);
    const educationHistory = await this.EducationHistoryRepository.findOne({ where: { _id: ID } });
    if (!educationHistory) {
      throw new BadRequestException('Invalid oject');
    }
    if (educationHistory.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Delete Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
    for (var _i = 0; _i < educationHistory.ResumeId.length; _i++) {
      const resume =  await this.resumeModel.findOne({_id: educationHistory.ResumeId[_i] });
      let copy = JSON.parse(JSON.stringify(resume));
      await this.resumeModel.remove(resume);
      for (var _j = 0; _j < copy.educationHistorys.length; _j++) {
        if (copy.educationHistorys[_j].id == id)
        {
          copy.educationHistorys[_j] = null;
        }
      }
      copy.last_modified.push(isoTime);
      copy.modified_by.push("automatic system");
      await this.resumeModel.create(copy);
    }
    return await this.EducationHistoryRepository.remove(educationHistory);

  }

  async UpdateWorkHistory(patchDto: PatchRegisDto, UserId: string, id: string) {
    const time = new Date();
    const isoTime = time.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" });
    const ID = new ObjectID(id);
    const workHistory = await this.WorkHistoryRepository.findOne({ where: { _id: ID } });
    if (!workHistory) {
      throw new BadRequestException('Invalid oject');
    }
    if (workHistory.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Patch Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
    if (patchDto.Work_JobName || patchDto.Work_JobType || patchDto.Company || patchDto.Work_Start_Month || patchDto.Work_End_Month || patchDto.Work_Start_Year || patchDto.Work_End_Year || patchDto.Salary || patchDto.Infomation || patchDto.SalaryType) {
      workHistory.last_modified.push(isoTime);
      if (patchDto.Work_JobName)
        workHistory.Work_JobName = patchDto.Work_JobName;
      if (patchDto.Work_JobType)
        workHistory.Work_JobType = patchDto.Work_JobName;
      if (patchDto.Company)
        workHistory.Work_Company = patchDto.Company;
      if (patchDto.Work_End_Month)
        workHistory.Work_End_Month = patchDto.Work_End_Month;
      if (patchDto.Work_End_Year)
        workHistory.Work_End_Year = patchDto.Work_End_Year;
      if (patchDto.Work_Start_Month)
        workHistory.Work_Start_Month = patchDto.Work_Start_Month;
      if (patchDto.Work_Start_Year)
        workHistory.Work_Start_Year = patchDto.Work_Start_Year;
      if (patchDto.Salary)
        workHistory.Work_Salary = patchDto.Salary;
      if (patchDto.SalaryType)
        workHistory.Work_Salary_Type = patchDto.SalaryType;
      if (patchDto.Infomation)
        workHistory.Work_Infomation = patchDto.Infomation;

      for (var _i = 0; _i < workHistory.ResumeId.length; _i++) {
        const resume =  await this.resumeModel.findOne({_id: workHistory.ResumeId[_i] });
        let copy = JSON.parse(JSON.stringify(resume));
        await this.resumeModel.remove(resume);
        for (var _j = 0; _j < copy.workHistorys.length; _j++) {
          if (copy.workHistorys[_j].id == id)
          {
            copy.workHistorys[_j].Work_JobName = workHistory.Work_JobName ;
            copy.workHistorys[_j].Work_JobType = workHistory.Work_JobType;
            copy.workHistorys[_j].Work_Company  = workHistory.Work_Company;
            copy.workHistorys[_j].Work_End_Month = workHistory.Work_End_Month ;
            copy.workHistorys[_j].Work_End_Year = workHistory.Work_End_Year;
            copy.workHistorys[_j].Work_Start_Month = workHistory.Work_Start_Month;
            copy.workHistorys[_j].Work_Start_Year = workHistory.Work_Start_Year;
            copy.workHistorys[_j].Work_Salary = workHistory.Work_Salary;
            copy.workHistorys[_j].Work_Salary_Type = workHistory.Work_Salary_Type;
            copy.workHistorys[_j].Work_Infomation =workHistory.Work_Infomation;
          }
        }
        copy.last_modified.push(isoTime);
        copy.modified_by.push("automatic system");
        await this.resumeModel.create(copy);
      }

      return await this.WorkHistoryRepository.save(workHistory);
    }
    throw new BadRequestException('Dto error');


  }

  async DeleteWorkHistory(UserId:string,id:string){
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
    const ID = new ObjectID(id);
    const workHistory = await this.WorkHistoryRepository.findOne({ where: { _id: ID } });
    if (!workHistory) {
      throw new BadRequestException('Invalid oject');
    }
    if (workHistory.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Delete Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
    
    for (var _i = 0; _i < workHistory.ResumeId.length; _i++) {
      const resume =  await this.resumeModel.findOne({_id: workHistory.ResumeId[_i] });
      let copy = JSON.parse(JSON.stringify(resume));
      await this.resumeModel.remove(resume);
      for (var _j = 0; _j < copy.workHistorys.length; _j++) {
        if (copy.workHistorys[_j].id == id)
        {
          copy.workHistorys[_j] = null;
        }
      }
      copy.last_modified.push(isoTime);
      copy.modified_by.push("automatic system");
      await this.resumeModel.create(copy);
    }
    return await this.WorkHistoryRepository.remove(workHistory);

  }

  async UpdateInterestedJob(patchDto: PatchRegisDto, UserId: string, id: string) {
    const time = new Date();
    const isoTime = time.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" });
    const ID = new ObjectID(id);
    const interestedJob = await this.InterestedJobRepository.findOne({ where: { _id: ID } });
    const userinfo = await this.userInfoModel.findOne({ UserId: UserId });
    if (!interestedJob) {
      throw new BadRequestException('Invalid oject');
    }
    if (interestedJob.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Patch Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
    interestedJob.last_modified.push(isoTime);
    const oldname = interestedJob.Job_JobName;
    let oldscore = 0;
    let newscore = 0;
    for (var _i = 0; _i < interestedJob.Job_Score.length; _i++) {
      oldscore = oldscore + interestedJob.Job_Score[_i];
    }
    interestedJob.Job_JobName = patchDto.Job_JobName;
    interestedJob.Job_Objective = patchDto.Job_Objective;
    let add = patchDto.Job_Score.length - interestedJob.Job_Score.length;
    for (var _i = 0; _i < patchDto.Job_Score.length; _i++) {
      newscore = newscore + patchDto.Job_Score[_i];
    }
    interestedJob.Job_Score = patchDto.Job_Score;
    interestedJob.Job_SkillName = patchDto.Job_SkillName;

    let tag_arr = [...userinfo.tags];
    tag_arr[tag_arr.indexOf(oldname)] = patchDto.Job_JobName;
    let sum_score = userinfo.AvgScore * userinfo.countSkill;
    sum_score = sum_score - oldscore + newscore;
    let avg_score = sum_score / (userinfo.countSkill + add);

    userinfo.countSkill = userinfo.countSkill + add;
    userinfo.tags = tag_arr;
    userinfo.AvgScore = avg_score;

    await this.userInfoModel.create(userinfo);

    const userJobSkill = await this.userJobSkillRepository.find({ where: { ParentId: id } });
    for (var _i = 0; _i < userJobSkill.length; _i++) {
      await this.userJobSkillRepository.remove(userJobSkill[_i]);
    }

    for (var _i = 0; _i < patchDto.Job_Score.length; _i++) {
      const userJobSkill = new UserJobSkill();
      userJobSkill.ParentId = id;
      userJobSkill.UserId = UserId;
      userJobSkill.Job_JobName = patchDto.Job_JobName;
      userJobSkill.Job_Score = patchDto.Job_Score[_i];
      userJobSkill.Job_SkillName = patchDto.Job_SkillName[_i];
      await this.userJobSkillRepository.save(userJobSkill);
    }

    for (var _i = 0; _i < interestedJob.ResumeId.length; _i++) {
      const resume =  await this.resumeModel.findOne({_id: interestedJob.ResumeId[_i] });
      let copy = JSON.parse(JSON.stringify(resume));
      await this.resumeModel.remove(resume);
      for (var _j = 0; _j < copy.interestedJob.length; _j++) {
        if (copy.interestedJob[_j].id == id)
        {
          copy.interestedJob[_j].Job_JobName = interestedJob.Job_JobName ;
          copy.interestedJob[_j].Job_Objective  = interestedJob.Job_Objective;
          copy.interestedJob[_j].Job_Score = interestedJob.Job_Score ;
          copy.interestedJob[_j].Job_SkillName = interestedJob.Job_SkillName;
        }
      }
      copy.last_modified.push(isoTime);
      copy.modified_by.push("automatic system");
      await this.resumeModel.create(copy);
    }

    return await this.InterestedJobRepository.save(interestedJob);      

  }

  async DeleteInterestedJob(UserId:string,id:string){
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
    const ID = new ObjectID(id);
    const interestedJob = await this.InterestedJobRepository.findOne({ where: { _id: ID } });
    if (!interestedJob) {
      throw new BadRequestException('Invalid oject');
    }
    if (interestedJob.UserId != UserId) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Can not Delete Other Data',
      }, HttpStatus.UNAUTHORIZED);
    }
    
    for (var _i = 0; _i < interestedJob.ResumeId.length; _i++) {
      const resume =  await this.resumeModel.findOne({_id: interestedJob.ResumeId[_i] });
      let copy = JSON.parse(JSON.stringify(resume));
      await this.resumeModel.remove(resume);
      for (var _j = 0; _j < copy.interestedJob.length; _j++) {
        if (copy.interestedJob[_j].id == id)
        {
          copy.interestedJob[_j] = null;
        }
      }
      copy.last_modified.push(isoTime);
      copy.modified_by.push("automatic system");
      await this.resumeModel.create(copy);
    }
    return await this.InterestedJobRepository.remove(interestedJob);

  }

  async GetInfo(UserId:string) {
      const result = new GetRegisDto;  
      const userid = new ObjectID(UserId);
      const account=await this.accountRepository.findOne({where:{_id:userid}});
      const userinfo=await this.userinfoRepository.findOne({where:{UserId:UserId}});
      
      result.Email=account.Email;
      result.Password=account.Password[account.Password.length - 1];
      result.ProfilePic=account.ProfilePic;
      result.Privacy=account.Privacy;
      result.Account_id=account._id.toString();
      result.Firstname=userinfo.Firstname;
      result.Lastname=userinfo.Lastname;
      result.Birthday=userinfo.Birthday;
      result.Gender=userinfo.Gender;
      result.AboutMe=userinfo.AboutMe;
      result.Email2nd=userinfo.Email2nd;
      result.Country=userinfo.Country;
      result.Province=userinfo.Province;
      result.City=userinfo.City;
      result.user_id=userinfo.id.toString();

      const softskill_arr=[];
      const softskill_id_arr=[];
      const additionalskill=await this.AdditionalSkillRepository.find({where:{UserId:UserId}});
      for (var _i = 0; _i < additionalskill.length; _i++) {
        softskill_arr.push(additionalskill[_i].AdditionalSkill);
        softskill_id_arr.push(additionalskill[_i].id.toString());
      }
      result.SoftSkill=softskill_arr;
      
      result.AdditionalSkill_id=softskill_id_arr
      
      const CertName_arr=[];
      const CertPic_arr=[];
      const CertYear_arr=[];
      const CertId_arr=[];
      const Certificate=await this.CertificateRepository.find({where:{UserId:UserId}});
  
      const Certificate_sortlist=[];
      const Certificate_Dictionary = {};
  
      for (var _i = 0; _i < Certificate.length; _i++) {
        const z=Certificate[_i].CertYear;
        Certificate_sortlist.push(z);
        Certificate_Dictionary[z]=_i;
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
      }
      
      result.CertName=CertName_arr;
      result.CertPic=CertPic_arr;
      result.CertYear=CertYear_arr;
      
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
  
      for (var _i = 0; _i < educationHistory.length; _i++) {
        const educationHistory_End_Year=educationHistory[_i].Education_End_Year;
        educationHistory_sortlist.push(educationHistory_End_Year);
        educationHistory_Dictionary[educationHistory_End_Year]=_i;
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
      }
      result.Degree=Degree_arr;
      result.Facalty=Facalty_arr;
      result.Field_of_study=Field_of_study_arr;
      result.Academy=Academy_arr;
      result.Grade=Grade_arr;
      result.Education_End_Year=Education_End_Year_arr;
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
      const workHistory =await this.WorkHistoryRepository.find({where:{UserId:UserId}});
  
      const workHistory_sortlist=[];
      const workHistory_Dictionary={};
  
      for (var _i = 0; _i < workHistory.length; _i++) {
        const workHistory_End=workHistory[_i].Work_End_Year+(workHistory[_i].Work_End_Month/12);
        workHistory_sortlist.push(workHistory_End);
        workHistory_Dictionary[workHistory_End]=_i;
      }
      workHistory_sortlist.sort();
      workHistory_sortlist.reverse();
      
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
      result.WorkHistory_id=WHId_arr;
      
      const Job_Objective_arr=[];
      const Job_Score_arr=[];
      const Job_JobName_arr=[];
      const Job_SkillName_arr=[];
      const  InterestedJob_id_arr=[];
      const IJ=await this.InterestedJobRepository.find({where:{UserId:UserId}});
      for (var _i = 0; _i < IJ.length; _i++) {
        Job_Objective_arr.push(IJ[_i].Job_Objective);
        Job_Score_arr.push(IJ[_i].Job_Score);
        Job_JobName_arr.push(IJ[_i].Job_JobName);
        Job_SkillName_arr.push(IJ[_i].Job_SkillName);
        InterestedJob_id_arr.push(IJ[_i]._id.toString());
  
      }
  
      result.Job_Objective=Job_Objective_arr;
      result.Job_Score=Job_Score_arr;
      result.Job_JobName=Job_JobName_arr;
      result.Job_SkillName=Job_SkillName_arr;
      result.InterestedJob_id=InterestedJob_id_arr;
      
      return result;
  }


  async Fullupdate(patchDto: PatchRegisDto2,UserId: string){
    /*
    const x={"c":1,"u":2};
    if(x["x"]==null){
      return "true"-----
    }else{
      return "F"
    }
    */
   /*
    const x={"wasd":{"x":50},"u":2};
    //return x["wasd"]["x"];
    if(x["wasd"]["x"]==null){
      return "true"
    }else{
      return "F"-----
    }
    */

    const counter = 0;
    
    const time = new Date();
    const isoTime = time.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" });
    
    const userid = new ObjectID(UserId);
    const acc = await this.accountRepository.findOne({ where: { _id: userid } });



    if (patchDto.Password != null)
      acc.Password.push(Md5.hashStr(patchDto.Password));
    acc.last_modified.push(isoTime);
    if (patchDto.ProfilePic != null)
      acc.ProfilePic = patchDto.ProfilePic;
    if (patchDto.Privacy != null)
      acc.Privacy = patchDto.Privacy;

    await this.accountRepository.save(acc);
  
    const userinfo = await this.userInfoModel.findOne({ UserId: UserId });

    if (patchDto.Firstname || patchDto.Lastname || patchDto.Birthday || patchDto.Gender || patchDto.AboutMe || patchDto.Email2nd || patchDto.Country || patchDto.City || patchDto.Province)
      userinfo.last_modified.push(isoTime);
    if (patchDto.Firstname != null)
      userinfo.Firstname = patchDto.Firstname;
    if (patchDto.Lastname != null)
      userinfo.Lastname = patchDto.Lastname;
    if (patchDto.Birthday != null)
      userinfo.Birthday = patchDto.Birthday;
    if (patchDto.Gender != null)
      userinfo.Gender = patchDto.Gender;
    if (patchDto.AboutMe != null)
      userinfo.AboutMe = patchDto.AboutMe;
    if (patchDto.Email2nd != null)
      userinfo.Email2nd = patchDto.Email2nd;
    if (patchDto.Country != null)
      userinfo.Country = patchDto.Country;
    if (patchDto.Province != null)
      userinfo.Province = patchDto.Province;
    if (patchDto.City != null)
      userinfo.City = patchDto.City;
    if (patchDto.ProfilePic != null)
      userinfo.ProfilePic = patchDto.ProfilePic;

    const resume =  await this.resumeModel.find({UserId: UserId });
    for (var _i = 0; _i < resume.length; _i++) {
      if (patchDto.ProfilePicBase64 || patchDto.Country || patchDto.Province || patchDto.City || patchDto.Firstname || patchDto.Lastname)
      {
        resume[_i].last_modified.push(isoTime);
        resume[_i].modified_by.push("automatic system");
      }
      if (patchDto.ProfilePicBase64 != null)
        resume[_i].ProfilePic =  patchDto.ProfilePicBase64;
      if (patchDto.Country || patchDto.Province || patchDto.City)
        resume[_i].Location = patchDto.Country + " " + patchDto.Province + " " + patchDto.City;
      if (patchDto.Firstname){
        resume[_i].First = patchDto.Firstname;
        resume[_i].Owner = patchDto.Firstname + " " + userinfo.Lastname;
      }
      if (patchDto.Lastname)
        resume[_i].Last = patchDto.Lastname;
        resume[_i].Owner = userinfo.Firstname + " " + patchDto.Lastname;
    }
    await this.resumeModel.create(resume);

    const port = await this.portModel.find({UserId: UserId });
    for (var _i = 0; _i < port.length; _i++) {
      if (patchDto.Firstname || patchDto.Lastname)
      {
        port[_i].last_modified.push(isoTime);
        port[_i].modified_by.push("automatic system");
      }
      if (patchDto.Firstname){
        port[_i].Owner = patchDto.Firstname + " " + userinfo.Lastname;
      }
      if (patchDto.Lastname)
        port[_i].Owner = userinfo.Firstname + " " + patchDto.Lastname;
    }
    await this.portModel.create(port);
    
    return await this.userInfoModel.create(userinfo);
    //*/
    return "sus";
    /*
    const Certificate_sortlist=[];
      const Certificate_Dictionary = {};
  
      for (var _i = 0; _i < Certificate.length; _i++) {
        const z=Certificate[_i].CertYear;
        Certificate_sortlist.push(z);
        Certificate_Dictionary[z]=_i;
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
      }
      */
    
  }

}