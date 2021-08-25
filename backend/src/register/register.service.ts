import { Injectable } from '@nestjs/common';
import { DeleteResult,Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory} from './entity/Register.entity'
import { CreateRegisDto } from './dto/create-register.dto';
import { EmailConfirmationService } from '../emailConfirmation/emailConfirmation.service';
import { ObjectID } from 'mongodb';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(Userinfo)
    private userinfoRepository: Repository<Userinfo>,
    @InjectRepository(AdditionalSkill)
    private AdditionalSkillRepository: Repository<AdditionalSkill>,
<<<<<<< HEAD
    @InjectRepository(Certificate)
    private CertificateRepository: Repository<Certificate>,
    @InjectRepository(EducationHistory)
    private EducationHistoryRepository: Repository<EducationHistory>,
    @InjectRepository(WorkHistory)
    private WorkHistoryRepository: Repository<WorkHistory>,
    @InjectRepository(InterestedJob)
    private InterestedJobRepository: Repository<InterestedJob>,
    private readonly emailConfirmationService: EmailConfirmationService

=======
    
    @InjectRepository(DDC)
    private DDCRepository: Repository<DDC>,
    
    @InjectRepository(DDP)
    private DDPRepository: Repository<DDP>,
    @InjectRepository(DDCity)
    private DDCityRepository: Repository<DDCity>,
    @InjectRepository(DDHS)
    private DDHSRepository: Repository<DDHS>,
    
    @InjectRepository(DDJS)
    private DDJSRepository: Repository<DDJS>,
    //*/
    @InjectRepository(otest)
    private otestRepository: Repository<otest>,
    
>>>>>>> 286637a521e1d2471ac8141c7d6651cafc14af48
  ) {}
  async createRegis(createDto: CreateRegisDto)
  {
    const account = new Account(); 
    account.Email = createDto.Email;
    account.Password = createDto.Password;
    account.ProfilePic = account.ProfilePic;
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
    userinfo.EmailBusiness = createDto.EmailBusiness;
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
      educationHistory.Find_of_study = createDto.Find_of_study[_i];
      educationHistory.Academy = createDto.Academy[_i];
      educationHistory.Grade = createDto.Grade[_i];
      educationHistory.Education_Start_Year = createDto.Education_Start_Year[_i];
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
  //------------------------------START TRUE
  /*
  async createTRUE(createDto: CreateDtoTRUE) {

    const Email=createDto.Email;

    const account = new PostAccount();
    account.Email = createDto.Email;
    account.Password = createDto.Password;
    account.ProfilePic = createDto.ProfilePic;
    if (createDto.Privacy==''){
      account.Privacy = "Public";
    }else{
      account.Privacy = createDto.Privacy;
    }

    const userinfo = new PostUserinfo();
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;

    const City = new PostCity();
    City.UserId = Email;
    City.Name = createDto.NameCity;

    const Country = new PostCountry();
    Country.UserId = Email;
    Country.Name = createDto.NameCountry;

    const Province = new PostProvince();
    Province.UserId = Email;
    Province.Name = createDto.NameProvince;

    const ED = new EducationHistory();
    ED.Academy=createDto.Academy;
    ED.Degree=createDto.Degree;
    ED.End_Year=createDto.End_Year;
    ED.Facalty=createDto.Facalty;
    ED.Find_of_study=createDto.Find_of_study;
    ED.Grade=createDto.Grade;
    ED.Start_Year=createDto.Start_Year;
    ED.UserId=Email;

    const WH = new WorkHistory();
    WH.Company=createDto.Company;
    WH.End_Month=createDto.End_Month;
    WH.End_Year=createDto.End_Year_WH;
    WH.Information=createDto.Information;
    WH.JobName=createDto.JobName_WH;
    WH.JobType=createDto.JobType;
    WH.Salary=createDto.Salary;
    WH.Start_Month=createDto.Start_Month;
    WH.Start_Year=createDto.Start_Year_WH;
    WH.UserId=Email;

    const ST = new SalaryType();
    ST.Name=createDto.NameSalary;
    ST.UserId=Email;

    const RE = new Resume();
    if (createDto.PrivacyFOl==''){
      RE.Privacy = "Public";
    }else{
      RE.Privacy = createDto.PrivacyFOl;
    }
    //RE.Privacy=createDto.PrivacyFOl;
    RE.Tag=createDto.Tag;
    RE.UserId=Email;


    const CF = new Certificate();
    CF.Year=createDto.Year;
    CF.Pic=createDto.Pic;
    CF.UserId=Email;

    const UJS = new userjobskills();
    UJS.JobName=createDto.JobName;
    UJS.Objective=createDto.Objective;
    UJS.Score=createDto.Score;
    UJS.SkillName=createDto.SkillName;
    UJS.UserId=Email;
    
    const ADS = new AdditionalSkill();
    ADS.SoftSkill=createDto.SoftSkill;
    ADS.UserId=Email;


    return (this.CityRepository.save(City),this.CountryRepository.save(Country),this.ProvinceRepository.save(Province),this.EDRepository.save(ED),this.WHRepository.save(WH),this.SLRepository.save(ST),this.ResumeRepository.save(RE),this.CertificateRepository.save(CF),this.accountRepository.save(account),this.userinfoRepository.save(userinfo),this.AdditionalSkillRepository.save(ADS),this.userjobskillRepository.save(UJS));
    
    //return this.AdditionalSkillRepository.save(ADS);
    //return this.userjobskillRepository.save(UJS);
    //return (this.ResumeRepository.save(RE),this.CertificateRepository.save(CF));
    //return (this.WHRepository.save(WH),this.SLRepository.save(ST));
    //return this.EDRepository.save(ED);
    //return (this.CityRepository.save(City),this.CountryRepository.save(Country),this.ProvinceRepository.save(Province),this.userinfoRepository.save(x));
    //return (this.accountRepository.save(account),this.userinfoRepository.save(userinfo));
  }
  //-------------------------------ENDTRUE
  //--------------------------------sub
  async findAllDDC(){
    return this.DDCRepository.find();
  }
  
  async findAllDDP(C: string){
    return this.DDPRepository.find({NameCountry: C});
  }
  async findAllDDCity(P: string){
    return this.DDCityRepository.find({NameProvince: P});
  }
  async findAllDDHS(){
    return this.DDHSRepository.find();
  }
<<<<<<< HEAD
=======
  //*/
>>>>>>> 286637a521e1d2471ac8141c7d6651cafc14af48
  async findAllDDJS(JS: string){
    return this.DDJSRepository.find({NameProvince: JS});
  }
  //*/
  //-------------------------------endsub
  async findAll() {
    return this.accountRepository.find();
  }*/

  /*async create(createDto: CreateRegisDto) {

    const account = new Account();
    account.Email = createDto.Email;
    account.Password = createDto.Password;
    account.ProfilePic = createDto.ProfilePic;
    account.Privacy = createDto.Privacy;
    account.isEmailConfirmed = createDto.isEmailConfirmed;

    const userinfo = new Userinfo();
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;


    return (this.accountRepository.save(account),this.userinfoRepository.save(userinfo));
  }*/
  /*
  async createOrUpdate(album: Account): Promise<Account> {
    return await this.accountRepository.save(album);
  }
  async findOne(Email: string): Promise<Account> {
    return await this.accountRepository.findOne({ Email: Email });
  }
  async remove(id: Account): Promise<DeleteResult> {
    return this.accountRepository.delete(id);
  }
  async findOneUserinfo(Email: string): Promise<PostUserinfo> {
    return await this.userinfoRepository.findOne({ UserId: Email });
  }
  
  async create2(Email: string,CreateDto2: CreateDto2) {

    const City = new PostCity();
    City.UserId = Email;
    City.Name = CreateDto2.NameCity;
  */
    //this.ProvinceRepository.save(City);
    /*
    account.Password = CreateDtoSe.Password;
    account.ProfilePic = CreateDtoSe.ProfilePic;
    account.Privacy = CreateDtoSe.Privacy;
    */
   /*
    const Country = new PostCountry();
    Country.UserId = Email;
    Country.Name = CreateDto2.NameCountry;
    //this.CountryRepository.save(Country);

    const Province = new PostProvince();
    Province.UserId = Email;
    Province.Name = CreateDto2.NameProvince;
    //this.ProvinceRepository.save(Province);

    //const text = new PostUserinfo();
    const x = await this.userinfoRepository.findOne({ UserId: Email });
    x.Birthday = (await this.userinfoRepository.findOne({ UserId: Email })).Birthday;
    x.Firstname =(await this.userinfoRepository.findOne({ UserId: Email })).Firstname;
    x.Lastname=(await this.userinfoRepository.findOne({ UserId: Email })).Lastname;
    x.Gender=(await this.userinfoRepository.findOne({ UserId: Email })).Gender;
    x.AboutMe = CreateDto2.AboutMe;
    x.EmailBusiness = CreateDto2.EmailBusiness;

    return (this.CityRepository.save(City),this.CountryRepository.save(Country),this.ProvinceRepository.save(Province),this.userinfoRepository.save(x));
  }
  async findOne2(Email: string): Promise<CreateDto2> {
    const x = new CreateDto2;
    x.UserId = Email;
    x.NameCountry =(await this.CountryRepository.findOne({ UserId: Email })).Name;
    x.NameProvince=(await this.ProvinceRepository.findOne({ UserId: Email })).Name;
    x.NameCity=(await this.CityRepository.findOne({ UserId: Email })).Name;
    x.AboutMe = (await this.userinfoRepository.findOne({ UserId: Email })).AboutMe;
    x.EmailBusiness = (await this.userinfoRepository.findOne({ UserId: Email })).EmailBusiness;
    return x;
  }
  async createOrUpdate2(Email: string,CreateDtoSe: CreateDto2) {

    const City = await this.CityRepository.findOne({ UserId: Email });
    City.Name = CreateDtoSe.NameCity;*/
    //this.ProvinceRepository.save(City);
    /*
    account.Password = CreateDtoSe.Password;
    account.ProfilePic = CreateDtoSe.ProfilePic;
    account.Privacy = CreateDtoSe.Privacy;
    */
    /*
    const Country = await this.CountryRepository.findOne({ UserId: Email });
    Country.Name = CreateDtoSe.NameCountry;
    //this.CountryRepository.save(Country);

    const Province = await this.ProvinceRepository.findOne({ UserId: Email });
    Province.Name = CreateDtoSe.NameProvince;
    //this.ProvinceRepository.save(Province);

    //const text = new PostUserinfo();
    const x = await this.userinfoRepository.findOne({ UserId: Email });
    x.Birthday = (await this.userinfoRepository.findOne({ UserId: Email })).Birthday;
    x.Firstname =(await this.userinfoRepository.findOne({ UserId: Email })).Firstname;
    x.Lastname=(await this.userinfoRepository.findOne({ UserId: Email })).Lastname;
    x.Gender=(await this.userinfoRepository.findOne({ UserId: Email })).Gender;
    x.AboutMe = CreateDtoSe.AboutMe;
    x.EmailBusiness = CreateDtoSe.EmailBusiness;

    return (this.CityRepository.save(City),this.CountryRepository.save(Country),this.ProvinceRepository.save(Province),this.userinfoRepository.save(x));
  }
  //-------------------------------------------no3
  async create3(Email: string,CreateDto3: EducationHistory) {

    const ED = new EducationHistory();
    ED.Academy=CreateDto3.Academy;
    ED.Degree=CreateDto3.Degree;
    ED.End_Year=CreateDto3.End_Year;
    ED.Facalty=CreateDto3.Facalty;
    ED.Find_of_study=CreateDto3.Find_of_study;
    ED.Grade=CreateDto3.Grade;
    ED.Start_Year=CreateDto3.Start_Year;
    ED.UserId=Email;
    return this.EDRepository.save(ED);
  }
  async findOne3(Email: string): Promise<EducationHistory> {
    return await this.EDRepository.findOne({ UserId: Email });
  }
  async createOrUpdate3(Email: string,CreateDto3: EducationHistory) {

    const ED = await this.EDRepository.findOne({ UserId: Email });
    ED.Academy=CreateDto3.Academy;
    ED.Degree=CreateDto3.Degree;
    ED.End_Year=CreateDto3.End_Year;
    ED.Facalty=CreateDto3.Facalty;
    ED.Find_of_study=CreateDto3.Find_of_study;
    ED.Grade=CreateDto3.Grade;
    ED.Start_Year=CreateDto3.Start_Year;

    return this.EDRepository.save(ED);
  }
  
  //-------------------------------------------no4
  async create4(Email: string,CreateDto4: CreateDto4) {

    const WH = new WorkHistory();
    WH.Company=CreateDto4.Company;
    WH.End_Month=CreateDto4.End_Month;
    WH.End_Year=CreateDto4.End_Year;
    WH.Information=CreateDto4.Information;
    WH.JobName=CreateDto4.JobName;
    WH.JobType=CreateDto4.JobType;
    WH.Salary=CreateDto4.Salary;
    WH.Start_Month=CreateDto4.Start_Month;
    WH.Start_Year=CreateDto4.Start_Year;
    WH.UserId=Email;

    const ST = new SalaryType();
    ST.Name=CreateDto4.NameSalary;
    ST.UserId=Email;

    return (this.WHRepository.save(WH),this.SLRepository.save(ST));
  }
  
  async findOne4(Email: string) {
    const x = new CreateDto4;
    x.UserId = Email;
    x.Company=(await this.WHRepository.findOne({ UserId: Email })).Company;
    x.End_Month=(await this.WHRepository.findOne({ UserId: Email })).End_Month;
    x.End_Year=(await this.WHRepository.findOne({ UserId: Email })).End_Year;
    x.Information=(await this.WHRepository.findOne({ UserId: Email })).Information;
    x.JobName=(await this.WHRepository.findOne({ UserId: Email })).JobName;
    x.JobType=(await this.WHRepository.findOne({ UserId: Email })).JobType;
    x.Salary=(await this.WHRepository.findOne({ UserId: Email })).Salary;
    x.Start_Month=(await this.WHRepository.findOne({ UserId: Email })).Start_Month;
    x.Start_Year=(await this.WHRepository.findOne({ UserId: Email })).Start_Year;
    x.NameSalary=(await this.SLRepository.findOne({ UserId: Email })).Name;
    return x;
  }
  
  async createOrUpdate4(Email: string,CreateDto4: CreateDto4) {


    const WH = await this.WHRepository.findOne({ UserId: Email });
    WH.Company=CreateDto4.Company;
    WH.End_Month=CreateDto4.End_Month;
    WH.End_Year=CreateDto4.End_Year;
    WH.Information=CreateDto4.Information;
    WH.JobName=CreateDto4.JobName;
    WH.JobType=CreateDto4.JobType;
    WH.Salary=CreateDto4.Salary;
    WH.Start_Month=CreateDto4.Start_Month;
    WH.Start_Year=CreateDto4.Start_Year;
    WH.UserId=Email;

    const ST =await this.SLRepository.findOne({ UserId: Email });
    ST.Name=CreateDto4.NameSalary;

    return (this.WHRepository.save(WH),this.SLRepository.save(ST));
  }
  //------------------------------------no5
  async create5(Email: string,CreateDto5: CreateDto5) {

    const RE = new Resume();
    RE.Privacy=CreateDto5.Privacy;
    RE.Tag=CreateDto5.Tag;
    RE.UserId=Email;


    const CF = new Certificate();
    CF.Year=CreateDto5.Year;
    CF.Pic=CreateDto5.Pic;
    CF.UserId=Email;

    return (this.ResumeRepository.save(RE),this.CertificateRepository.save(CF));
  }
  
  async findOne5(Email: string) {
    const x = new CreateDto5;
    x.UserId = Email;
    x.Pic=(await this.CertificateRepository.findOne({ UserId: Email })).Pic;
    x.Privacy=(await this.ResumeRepository.findOne({ UserId: Email })).Privacy;
    x.Tag=(await this.ResumeRepository.findOne({ UserId: Email })).Tag;
    x.Year=(await this.CertificateRepository.findOne({ UserId: Email })).Year;
    return x;
  }
  
  async createOrUpdate5(Email: string,CreateDto5: CreateDto5) {


    const RE = await this.ResumeRepository.findOne({ UserId: Email });
    RE.Privacy=CreateDto5.Privacy;
    RE.Tag=CreateDto5.Tag;

    const CF =await this.CertificateRepository.findOne({ UserId: Email });
    CF.Year=CreateDto5.Year;
    CF.Pic=CreateDto5.Pic;

    return (this.ResumeRepository.save(RE),this.CertificateRepository.save(CF));
  }
  //-----------------------no6---------------------------------//
  async create6(Email: string,CreateDto6: userjobskills) {

    const UJS = new userjobskills();
    UJS.JobName=CreateDto6.JobName;
    UJS.Objective=CreateDto6.Objective;
    UJS.Score=CreateDto6.Score;
    UJS.SkillName=CreateDto6.SkillName;
    UJS.UserId=Email;
    return this.userjobskillRepository.save(UJS);
  }
  async findOne6(Email: string): Promise<userjobskills> {
    return await this.userjobskillRepository.findOne({ UserId: Email });
  }
  async createOrUpdate6(Email: string,CreateDto6: userjobskills) {

    const UJS = await this.userjobskillRepository.findOne({ UserId: Email });
    UJS.JobName=CreateDto6.JobName;
    UJS.Objective=CreateDto6.Objective;
    UJS.Score=CreateDto6.Score;
    UJS.SkillName=CreateDto6.SkillName;

    return this.userjobskillRepository.save(UJS);
  }
  //-----------------------no7---------------------------------AdditionalSkillRepository//
  async create7(Email: string,CreateDto6: AdditionalSkill) {

    const ADS = new AdditionalSkill();
    ADS.SoftSkill=CreateDto6.SoftSkill;
    ADS.UserId=Email;
    return this.AdditionalSkillRepository.save(ADS);
  }
  async findOne7(Email: string): Promise<AdditionalSkill> {
    return await this.AdditionalSkillRepository.findOne({ UserId: Email });
  }
  async createOrUpdate7(Email: string,CreateDto6: AdditionalSkill) {

    const ADS = await this.AdditionalSkillRepository.findOne({ UserId: Email });
    ADS.SoftSkill=CreateDto6.SoftSkill;

    return this.AdditionalSkillRepository.save(ADS);
  }
  //------------------------------------------------no12
  async create12(createDto: CreateDto1) {

    const account = new PostAccount();
    account.Email = createDto.Email;
    account.Password = createDto.Password;
    account.ProfilePic = createDto.ProfilePic;
    if (createDto.Privacy==''){
      account.Privacy = "Public";
    }else{
      account.Privacy = createDto.Privacy;
    }

    const userinfo = new PostUserinfo();
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;

    return (this.accountRepository.save(account),this.userinfoRepository.save(userinfo));
  }
  async findOne12(Email: string) {
    const x = new CreateDto1;
    x.Email = Email;
    x.Password= (await this.accountRepository.findOne({ Email: Email })).Password;
    x.ProfilePic=(await this.accountRepository.findOne({ Email: Email })).ProfilePic;
    x.Privacy=(await this.accountRepository.findOne({ Email: Email })).Privacy;
    x.Birthday=(await this.userinfoRepository.findOne({ UserId: Email })).Birthday;
    x.Firstname=(await this.userinfoRepository.findOne({ UserId: Email })).Firstname;
    x.Lastname=(await this.userinfoRepository.findOne({ UserId: Email })).Lastname;
    x.Gender=(await this.userinfoRepository.findOne({ UserId: Email })).Gender;
    return x;
  }
  async createOrUpdate12(Email: string,createDto: CreateDto1) {

    const ADS = await this.AdditionalSkillRepository.findOne({ UserId: Email });
    const account =  await this.accountRepository.findOne({ Email: Email });
    account.Email = createDto.Email;
    account.Password = createDto.Password;
    account.ProfilePic = createDto.ProfilePic;
    if (createDto.Privacy==''){
      account.Privacy = "Public";
    }else{
      account.Privacy = createDto.Privacy;
    }

    const userinfo = await this.userinfoRepository.findOne({ UserId: Email });
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;

    return this.AdditionalSkillRepository.save(ADS);
  }
  /*
  async findOnetest(Email: string): Promise<Userinfo> {
    const x = new Userinfo;
    x.Birthday=
    x.UserId = Email;
    x.NameCountry =(await this.CountryRepository.findOne({ UserId: Email })).Name;
    x.NameProvince=(await this.ProvinceRepository.findOne({ UserId: Email })).Name;
    x.NameCity=(await this.CityRepository.findOne({ UserId: Email })).Name;
    x.AboutMe = (await this.userinfoRepository.findOne({ UserId: Email })).AboutMe;
    x.EmailBusiness = (await this.userinfoRepository.findOne({ UserId: Email })).EmailBusiness;
    return x;
  }
  //*/
  
}