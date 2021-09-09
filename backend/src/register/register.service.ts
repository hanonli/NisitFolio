import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Md5 } from 'ts-md5/dist/md5';
import { ObjectID } from 'mongodb';

import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory} from './entity/Register.entity'
import { CreateRegisDto } from './dto/create-register.dto';
import { EmailConfirmationService } from '../emailConfirmation/emailConfirmation.service';


import { JobTitle } from 'src/register/entity/JobTitle.entrity'
import { Skill } from 'src/register/entity/Skill.entrity'
import { HardSkill} from 'src/register/entity/HardSkill.entrity'
import { EditProfileDto2 } from './dto/editprofile2.dto';

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
    private HardSkillRepository: Repository<Skill>,
    
    private readonly emailConfirmationService: EmailConfirmationService

  ) {}
  async createRegis(createDto: CreateRegisDto)
  {
    const account = new Account(); 
    account.Email = createDto.Email;
    account.Password = Md5.hashStr(createDto.Password);
    account.ProfilePic = createDto.ProfilePic; 
    account.Privacy = "Public";
    account.isEmailConfirmed = false;

    const accountid = (await this.accountRepository.save(account))._id
    const userinfo = new Userinfo();
    userinfo.UserId = accountid;
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;
    userinfo.AboutMe = createDto.AboutMe;
    userinfo.Email2nd = createDto.Email2nd;
    userinfo.Country = createDto.Country;
    userinfo.Province = createDto.Province;
    userinfo.City = createDto.City;

    for (var _i = 0; _i < createDto.SoftSkill.length; _i++) {
      const additionalskill = new AdditionalSkill();
      additionalskill.UserId = accountid;
      additionalskill.SoftSkill  = createDto.SoftSkill[_i]; 
      await this.AdditionalSkillRepository.save(additionalskill);
    }
    
    for (var _i = 0; _i < createDto.CertName.length; _i++) {
      const certificate = new Certificate();
      certificate.UserId = accountid;
      certificate.ResumeId = null;
      certificate.CertName = createDto.CertName[_i]
      certificate.CertPic = createDto.CertPic[_i]
      certificate.CertYear = createDto.CertYear[_i]
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
      await this.EducationHistoryRepository.save(educationHistory);
    }

    for (var _i = 0; _i < createDto.Work_JobName.length; _i++) {
      const workHistory = new WorkHistory();
      workHistory.UserId = accountid;
      workHistory.Work_JobName = createDto.Work_JobName[_i];
      workHistory.Work_JobType = createDto.Work_JobType[_i];
      workHistory.Company = createDto.Company[_i];
      workHistory.Work_Start_Month = createDto.Work_Start_Month[_i];
      workHistory.Work_End_Month = createDto.Work_End_Month[_i];
      workHistory.Work_Start_Year = createDto.Work_Start_Year[_i];
      workHistory.Work_End_Year = createDto.Work_End_Year[_i];
      workHistory.Salary = createDto.Salary[_i]; 
      workHistory.Infomation = createDto.Infomation[_i]; 
      await this.WorkHistoryRepository.save(workHistory);
    }

    for (var _i = 0; _i < createDto.Job_JobName.length; _i++) {
      const interestedJob = new InterestedJob();
      interestedJob.UserId = accountid;
      interestedJob.Job_Objective = createDto.Job_Objective[_i];
      interestedJob.Job_Score = createDto.Job_Score[_i];
      interestedJob.Job_JobName = createDto.Job_JobName[_i];
      interestedJob.Job_SkillName = createDto.Job_SkillName[_i];
      await this.InterestedJobRepository.save(interestedJob);
    }
    
    await this.emailConfirmationService.sendVerificationLink(createDto.Email);

    return (this.userinfoRepository.save(userinfo));

  }

  async findJobTitle()
  {
    return this.JobTitleRepository.find();
  }

  async findSkill(jobTitle:string)
  {
    return this.SkillRepository.find({where:{ jobTitle: jobTitle }});
  }

  async findHardSkill(Type:string)
  {
    return this.HardSkillRepository.find({where:{ Type: Type }});
  }

  async UpdateRegis(createDto: CreateRegisDto,UserId:string)
  {
    const userid = new ObjectID(UserId);
    const acc =  await this.accountRepository.findOne({where:{ _id: userid }});
    
    if (acc && acc._id === userid) {
      if (createDto.Password != null)
        acc.Password = Md5.hashStr(createDto.Password);
      if (createDto.ProfilePic != null)
        acc.ProfilePic = createDto.ProfilePic;
      if (createDto.Privacy != null)
        acc.Privacy = createDto.Privacy;
      
      await this.accountRepository.save(acc);
    }

    const userinfo =  await this.userinfoRepository.findOne({where:{ UserId: userid }});
    userinfo.UserId = userid;
    
    if (userinfo && userinfo.id === userid) {
      if (createDto.Firstname != null)
        userinfo.Firstname = createDto.Firstname;
      if (createDto.Lastname != null)
        userinfo.Lastname = createDto.Lastname;
      if (createDto.Birthday != null)
        userinfo.Birthday = createDto.Birthday;
      if (createDto.Gender != null)
        userinfo.Gender = createDto.Gender;
      if (createDto.AboutMe != null)
        userinfo.AboutMe = createDto.AboutMe;
      if (createDto.Email2nd != null)
        userinfo.Email2nd = createDto.Email2nd;
      if (createDto.Country != null)
        userinfo.Country = createDto.Country;
      if (createDto.Province != null)
        userinfo.Province = createDto.Province;
      if (createDto.City != null)
        userinfo.City = createDto.City;
    }

    const additionalskill = await this.AdditionalSkillRepository.find({where:{ _id: userid }});
    const certificate = await this.CertificateRepository.find({where:{ _id: userid }});
    const educationHistory =  await this.EducationHistoryRepository.find({where:{ _id: userid }});
    const workHistory = await this.WorkHistoryRepository.find({where:{ _id: userid }});
    const interestedJob = await this.InterestedJobRepository.find({where:{ _id: userid }});

    for (var _i = 0; _i < additionalskill.length; _i++) {
      
      additionalskill[_i].SoftSkill =  createDto.SoftSkill[_i]; 
      await this.AdditionalSkillRepository.save(additionalskill);
    }
    
    for (var _i = 0; _i < certificate.length; _i++) {
      certificate[_i].CertName = createDto.CertName[_i]
      certificate[_i].CertPic = createDto.CertPic[_i]
      certificate[_i].CertYear = createDto.CertYear[_i]
      await this.CertificateRepository.save(certificate);
    }

    for (var _i = 0; _i < educationHistory.length; _i++) {
      educationHistory[_i].Degree = createDto.Degree[_i];
      educationHistory[_i].Facalty = createDto.Facalty[_i];
      educationHistory[_i].Field_of_study = createDto.Field_of_study[_i];
      educationHistory[_i].Academy = createDto.Academy[_i];
      educationHistory[_i].Grade = createDto.Grade[_i];
      educationHistory[_i].Education_End_Year = createDto.Education_End_Year[_i];
      await this.EducationHistoryRepository.save(educationHistory);
    }

    for (var _i = 0; _i < workHistory.length; _i++) {
      
      workHistory[_i].Work_JobName = createDto.Work_JobName[_i];
      workHistory[_i].Work_JobType = createDto.Work_JobType[_i];
      workHistory[_i].Company = createDto.Company[_i];
      workHistory[_i].Work_Start_Month = createDto.Work_Start_Month[_i];
      workHistory[_i].Work_End_Month = createDto.Work_End_Month[_i];
      workHistory[_i].Work_Start_Year = createDto.Work_Start_Year[_i];
      workHistory[_i].Work_End_Year = createDto.Work_End_Year[_i];
      workHistory[_i].Salary = createDto.Salary[_i]; 
      workHistory[_i].Infomation = createDto.Infomation[_i]; 
      await this.WorkHistoryRepository.save(workHistory);
    }

    for (var _i = 0; _i < interestedJob.length; _i++) {
      
      interestedJob[_i].Job_Objective = createDto.Job_Objective[_i];
      interestedJob[_i].Job_Score = createDto.Job_Score[_i];
      interestedJob[_i].Job_JobName = createDto.Job_JobName[_i];
      interestedJob[_i].Job_SkillName = createDto.Job_SkillName[_i];
      await this.InterestedJobRepository.save(interestedJob);
    }
    
    return (this.userinfoRepository.save(userinfo));

  }

  async GetInfo(UserId:string) {
    const result = new CreateRegisDto;
    const userid = new ObjectID(UserId);
    const account=await this.accountRepository.findOne({where:{_id:userid}});
    const userinfo=await this.userinfoRepository.findOne({where:{UserId:userid}});

    result.Email=account.Email;
    result.Password=account.Password;
    result.ProfilePic=account.ProfilePic;
    result.Privacy=account.Privacy;

    result.Firstname=userinfo.Firstname;
    result.Lastname=userinfo.Lastname;
    result.Birthday=userinfo.Birthday;
    result.Gender=userinfo.Gender;
    result.AboutMe=userinfo.AboutMe;
    result.Email2nd=userinfo.Email2nd;
    result.Country=userinfo.Country;
    result.Province=userinfo.Province;
    result.City=userinfo.City;

    const softskill_arr=[];
    const additionalskill=await this.AdditionalSkillRepository.find({where:{UserId:userid}});
    for (var _i = 0; _i < additionalskill.length; _i++) {
      softskill_arr.push(additionalskill[_i].SoftSkill);
    }
    result.SoftSkill=softskill_arr;
   

    const CertName_arr=[];
    const CertPic_arr=[];
    const CertYear_arr=[];
    const Certificate=await this.CertificateRepository.find({where:{UserId:userid}});
    for (var _i = 0; _i < Certificate.length; _i++) {
      CertName_arr.push(Certificate[_i].CertName);
      CertPic_arr.push(Certificate[_i].CertPic);
      CertYear_arr.push(Certificate[_i].CertYear);

    }
    result.CertName=CertName_arr;
    result.CertPic=CertPic_arr;
    result.CertYear=CertYear_arr;


    const Degree_arr=[];
    const Facalty_arr=[];
    const Field_of_study_arr=[];
    const Academy_arr=[];
    const Grade_arr=[];
    const Education_End_Year_arr=[];
    const educationHistory=await this.EducationHistoryRepository.find({where:{UserId:userid}});
    for (var _i = 0; _i < educationHistory.length; _i++) {
      Degree_arr.push(educationHistory[_i].Degree);
      Facalty_arr.push(educationHistory[_i].Facalty);
      Field_of_study_arr.push(educationHistory[_i].Field_of_study);
      Academy_arr.push(educationHistory[_i].Academy);
      Grade_arr.push(educationHistory[_i].Grade);
      Education_End_Year_arr.push(educationHistory[_i].Education_End_Year);
    }
    result.Degree=Degree_arr;
    result.Facalty=Facalty_arr;
    result.Field_of_study=Field_of_study_arr;
    result.Academy=Academy_arr;
    result.Grade=Grade_arr;
    result.Education_End_Year=Education_End_Year_arr;
    
    

    const Work_JobName_arr=[];
    const Work_JobType_arr=[];
    const Company_arr=[];
    const Work_Start_Month_arr=[];
    const Work_End_Month_arr=[];
    const Work_Start_Year_arr=[];
    const Work_End_Year_arr=[];
    const Salary_arr=[];
    const Infomation_arr=[];
    const workHistory =await this.WorkHistoryRepository.find({where:{UserId:userid}});
    for (var _i = 0; _i < workHistory.length; _i++) {
      Work_JobName_arr.push(workHistory[_i].Work_JobName);
      Work_JobType_arr.push(workHistory[_i].Work_JobType);
      Company_arr.push(workHistory[_i].Company);
      Work_Start_Month_arr.push(workHistory[_i].Work_Start_Month);
      Work_End_Month_arr.push(workHistory[_i].Work_End_Month);
      Work_Start_Year_arr.push(workHistory[_i].Work_Start_Year);
      Work_End_Year_arr.push(workHistory[_i].Work_End_Year);
      Salary_arr.push(workHistory[_i].Salary);
      Infomation_arr.push(workHistory[_i].Infomation);
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

    const Job_Objective_arr=[];
    const Job_Score_arr=[];
    const Job_JobName_arr=[];
    const Job_SkillName_arr=[];
    const IJ=await this.InterestedJobRepository.find({where:{UserId:userid}});
    for (var _i = 0; _i < IJ.length; _i++) {
      Job_Objective_arr.push(IJ[_i].Job_Objective);
      Job_Score_arr.push(IJ[_i].Job_Score);
      Job_JobName_arr.push(IJ[_i].Job_JobName);
      Job_SkillName_arr.push(IJ[_i].Job_SkillName);

    }

    result.Job_Objective=Job_Objective_arr;
    result.Job_Score=Job_Score_arr;
    result.Job_JobName=Job_JobName_arr;
    result.Job_SkillName=Job_SkillName_arr;
    
    return result;
    
  }
  async UpdatProfile(UserId:string,createDto:EditProfileDto2){
    const UserID2 = new ObjectID(UserId);

    const account = await this.accountRepository.findOne({_id:UserID2});
    account.Email = createDto.Email;

    if(createDto.New_Password!=createDto.New_Password_again){
      return "new password not match";
    }
    account.Password = Md5.hashStr(createDto.New_Password);

    account.ProfilePic = createDto.ProfilePic; 
    //account.Privacy = "Public";
    if(createDto.Privacy==""){
      account.Privacy = "Public";
    }else{
      account.Privacy=createDto.Privacy;
    }
    account.isEmailConfirmed = false;

    const userinfo = await this.userinfoRepository.findOne({UserId:UserID2});
    userinfo.UserId = UserID2;
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;
    userinfo.AboutMe = createDto.AboutMe;
    userinfo.Email2nd = createDto.Email2nd;
    userinfo.Country = createDto.Country;
    userinfo.Province = createDto.Province;
    userinfo.City = createDto.City;

    await this.userinfoRepository.save(userinfo);
    const old_userinfo = await this.userinfoRepository.findOne({UserId:UserID2});
    await this.userinfoRepository.remove(old_userinfo);
    
    const old_additionalskill = await this.AdditionalSkillRepository.find({UserId:UserID2});
    for (var _i = 0; _i < old_additionalskill.length; _i++) {
      await this.AdditionalSkillRepository.remove(old_additionalskill[_i]);
    }
    for (var _i = 0; _i < createDto.SoftSkill.length; _i++) {
      const additionalskill = new AdditionalSkill();
      additionalskill.UserId = UserID2;
      additionalskill.SoftSkill  = createDto.SoftSkill[_i]; 
      await this.AdditionalSkillRepository.save(additionalskill);
    }
    
    const old_certificate = await this.CertificateRepository.find({UserId:UserID2});
    for (var _i = 0; _i < old_certificate.length; _i++) {
      await this.CertificateRepository.remove(old_certificate[_i]);
    }
    for (var _i = 0; _i < createDto.CertName.length; _i++) {
      const certificate = new Certificate();
      certificate.UserId = UserID2;
      certificate.ResumeId = null;
      certificate.CertName = createDto.CertName[_i]
      certificate.CertPic = createDto.CertPic[_i]
      certificate.CertYear = createDto.CertYear[_i]
      await this.CertificateRepository.save(certificate);
    }

    const old_ED = await this.EducationHistoryRepository.find({UserId:UserID2});
    for (var _i = 0; _i < old_ED.length; _i++) {
      await this.EducationHistoryRepository.remove(old_ED[_i]);
    }
    for (var _i = 0; _i < createDto.Degree.length; _i++) {
      const educationHistory = new EducationHistory();
      educationHistory.UserId = UserID2;
      educationHistory.Degree = createDto.Degree[_i];
      educationHistory.Facalty = createDto.Facalty[_i];
      educationHistory.Field_of_study = createDto.Field_of_study[_i];
      educationHistory.Academy = createDto.Academy[_i];
      educationHistory.Grade = createDto.Grade[_i];
      educationHistory.Education_End_Year = createDto.Education_End_Year[_i];
      await this.EducationHistoryRepository.save(educationHistory);
    }


    const old_WH = await this.WorkHistoryRepository.find({UserId:UserID2});
    for (var _i = 0; _i < old_WH.length; _i++) {
      await this.WorkHistoryRepository.remove(old_WH[_i]);
    }
    for (var _i = 0; _i < createDto.Work_JobName.length; _i++) {
      const workHistory = new WorkHistory();
      workHistory.UserId = UserID2;
      workHistory.Work_JobName = createDto.Work_JobName[_i];
      workHistory.Work_JobType = createDto.Work_JobType[_i];
      workHistory.Company = createDto.Company[_i];
      workHistory.Work_Start_Month = createDto.Work_Start_Month[_i];
      workHistory.Work_End_Month = createDto.Work_End_Month[_i];
      workHistory.Work_Start_Year = createDto.Work_Start_Year[_i];
      workHistory.Work_End_Year = createDto.Work_End_Year[_i];
      workHistory.Salary = createDto.Salary[_i]; 
      workHistory.Infomation = createDto.Infomation[_i]; 
      await this.WorkHistoryRepository.save(workHistory);
    }

    const old_IJ = await this.InterestedJobRepository.find({UserId:UserID2});
    for (var _i = 0; _i < old_IJ.length; _i++) {
      await this.InterestedJobRepository.remove(old_IJ[_i]);
    }
    for (var _i = 0; _i < createDto.Job_JobName.length; _i++) {
      const interestedJob = new InterestedJob();
      interestedJob.UserId = UserID2;
      interestedJob.Job_Objective = createDto.Job_Objective[_i];
      interestedJob.Job_Score = createDto.Job_Score[_i];
      interestedJob.Job_JobName = createDto.Job_JobName[_i];
      interestedJob.Job_SkillName = createDto.Job_SkillName[_i];
      await this.InterestedJobRepository.save(interestedJob);
    }
    

    return (this.accountRepository.save(account));
    

  }
  
}