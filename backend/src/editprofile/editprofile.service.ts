import { Injectable } from '@nestjs/common';
import { EditProfileDto } from './dto/editprofile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory, otest} from './entity/Register.entity'
import { ObjectID } from 'mongodb';
/*
import { Country } from 'src/regi/entity/Country.entity'
import { City } from 'src/editprofile/entity/City.entity'
import { Province } from 'src/editprofile/entity/Province.entity'*/
import { JobTitle } from 'src/editprofile/entity/JobTitle.entrity'
import { Skill } from 'src/editprofile/entity/Skill.entrity'
import { HardSkill } from './entity/HardSkill.entrity';
import { count } from 'console';
import { x } from 'joi';
import { EditProfileDto2 } from './dto/editprofile2.dto';
import { Md5 } from 'ts-md5';

@Injectable()
export class editprofileService {
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
    @InjectRepository(otest)
    private otestRepository: Repository<otest>,

  ) {}

  async GetInfo(UserId:string) {
    const x = new EditProfileDto;
    const UserID2 = new ObjectID(UserId);
    const account=await this.accountRepository.findOne({_id:UserID2});

    x.Email=account.Email;
    x.Password=account.Password;
    x.ProfilePic=account.ProfilePic;
    x.Privacy=account.Privacy;
    //return x;

    const userinfo=await this.userinfoRepository.findOne({UserId:UserID2});
    //return userinfo;
    x.Firstname=userinfo.Firstname;
    x.Lastname=userinfo.Lastname;
    x.Birthday=userinfo.Birthday;
    x.Gender=userinfo.Gender;
    x.AboutMe=userinfo.AboutMe;
    x.Email2nd=userinfo.Email2nd;
    x.Country=userinfo.Country;
    x.Province=userinfo.Province;
    x.City=userinfo.City;

    const softskillarr=[];
    const additionalskill=await this.AdditionalSkillRepository.find({UserId:UserID2});
    for (var _i = 0; _i < additionalskill.length; _i++) {
      softskillarr.push(additionalskill[_i].SoftSkill);
    }
    x.SoftSkill=softskillarr;
    //return x;

    //x.SoftSkill

    const CertName_list=[];
    const CertPic_list=[];
    const CertYear_list=[];
    const Certificate=await this.CertificateRepository.find({UserId:UserID2});
    for (var _i = 0; _i < Certificate.length; _i++) {
      CertName_list.push(Certificate[_i].CertName);
      CertPic_list.push(Certificate[_i].CertPic);
      CertYear_list.push(Certificate[_i].CertYear);

    }
    x.CertName=CertName_list;
    x.CertPic=CertPic_list;
    x.CertYear=CertYear_list;
    //return x;

    const Degree_list=[];
    const Facalty_list=[];
    const Field_of_study_list=[];
    const Academy_list=[];
    const Grade_list=[];
    const Education_End_Year_list=[];
    const EH=await this.EducationHistoryRepository.find({UserId:UserID2});
    for (var _i = 0; _i < EH.length; _i++) {
      Degree_list.push(EH[_i].Degree);
      Facalty_list.push(EH[_i].Facalty);
      Field_of_study_list.push(EH[_i].Field_of_study);
      Academy_list.push(EH[_i].Academy);
      Grade_list.push(EH[_i].Grade);
      Education_End_Year_list.push(EH[_i].Education_End_Year);
    }
    x.Degree=Degree_list;
    x.Facalty=Facalty_list;
    x.Field_of_study=Field_of_study_list;
    x.Academy=Academy_list;
    x.Grade=Grade_list;
    x.Education_End_Year=Education_End_Year_list;
    //re
    

    const Work_JobName_list=[];
    const Work_JobType_list=[];
    const Company_list=[];
    const Work_Start_Month_list=[];
    const Work_End_Month_list=[];
    const Work_Start_Year_list=[];
    const Work_End_Year_list=[];
    const Salary_list=[];
    const Infomation_list=[];
    const WH=await this.WorkHistoryRepository.find({UserId:UserID2});
    for (var _i = 0; _i < WH.length; _i++) {
      Work_JobName_list.push(WH[_i].Work_JobName);
      Work_JobType_list.push(WH[_i].Work_JobType);
      Company_list.push(WH[_i].Company);
      Work_Start_Month_list.push(WH[_i].Work_Start_Month);
      Work_End_Month_list.push(WH[_i].Work_End_Month);
      Work_Start_Year_list.push(WH[_i].Work_Start_Year);
      Work_End_Year_list.push(WH[_i].Work_End_Year);
      Salary_list.push(WH[_i].Salary);
      Infomation_list.push(WH[_i].Infomation);
    }
    x.Work_JobName=Work_JobName_list;
    x.Work_JobType=Work_JobType_list;
    x.Company=Company_list;
    x.Work_Start_Month=Work_Start_Month_list;
    x.Work_End_Month=Work_End_Month_list;
    x.Work_Start_Year=Work_Start_Year_list;
    x.Work_End_Year=Work_End_Year_list;
    x.Salary=Salary_list;
    x.Infomation=Infomation_list;

    const Job_Objective_list=[];
    const Job_Score_list=[];
    const Job_JobName_list=[];
    const Job_SkillName_list=[];
    const IJ=await this.InterestedJobRepository.find({UserId:UserID2});
    for (var _i = 0; _i < IJ.length; _i++) {
      Job_Objective_list.push(IJ[_i].Job_Objective);
      Job_Score_list.push(IJ[_i].Job_Score);
      Job_JobName_list.push(IJ[_i].Job_JobName);
      Job_SkillName_list.push(IJ[_i].Job_SkillName);

    }

    x.Job_Objective=Job_Objective_list;
    x.Job_Score=Job_Score_list;
    x.Job_JobName=Job_JobName_list;
    x.Job_SkillName=Job_SkillName_list;
    return x;
    
  }
  //-----------------------------------------------------------dele
  async testdele(UserId:string){
    const UserID2 = new ObjectID(UserId);
    const x=await this.otestRepository.find({UserId:UserID2});
    for (var _i = 0; _i < x.length; _i++) {
      await this.otestRepository.remove(x[_i]);

    }
    return "sus";

  }
  //--sucees
  //--------------------------------------------------------------updat
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
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;
    userinfo.AboutMe = createDto.AboutMe;
    userinfo.Email2nd = createDto.Email2nd;
    userinfo.Country = createDto.Country;
    userinfo.Province = createDto.Province;
    userinfo.City = createDto.City;
    
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
    

    return (this.userinfoRepository.save(userinfo),this.accountRepository.save(account));
    

  }
  

}

