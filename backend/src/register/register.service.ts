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

    const accountid = (await this.accountRepository.save(account)).id
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
  
    if (acc && acc.id === userid) {
      if (createDto.Password != null)
        acc.Password = Md5.hashStr(createDto.Password);
      if (createDto.ProfilePic != null)
        acc.ProfilePic = createDto.ProfilePic;
      if (createDto.Privacy != null)
        acc.Privacy = createDto.Privacy;
      
      await this.accountRepository.save(acc);
    }

    const userinfo =  await this.userinfoRepository.findOne({where:{ _id: userid }});
  
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

    //const userinfo = new Userinfo();
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;
    userinfo.AboutMe = createDto.AboutMe;
    userinfo.Email2nd = createDto.Email2nd;
    userinfo.Country = createDto.Country;
    userinfo.Province = createDto.Province;
    userinfo.City = createDto.City;

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
  
}