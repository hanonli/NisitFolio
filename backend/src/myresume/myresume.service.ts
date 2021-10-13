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
    resume.Aboutme = user.AboutMe; 
    resume.Email = user.Email2nd;
    resume.Location = user.Country + " " + user.Province + " "+ user.City;

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
      const subportfolio = await this.portModel.findOne({ _id: portid },["Port_Tag","Port_Privacy","portfolioPictures"]);
      port_arr.push(subportfolio);
      portfolio.ResumeId.push(resumeID);
      await this.portModel.create(portfolio)
    }
    myresume.portfolios = port_arr;

    myresume.Color = CreateDto.Color;
    myresume.create_time =  isoTime;
    myresume.last_modified =  [isoTime] ;
    myresume.modified_by = [ip];
    const ObjID = new ObjectID(resumeID);
    myresume._id=ObjID;
    return await this.resumePictureRepository.save(myresume);
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
    thisy.Aboutme=thisx.Aboutme
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
      if (CreateDto.SoftSkillID != null){
        const softskill_arr = [];
        for (var _i = 0; _i < CreateDto.SoftSkillID.length; _i++) {
          const softskillid = new ObjectID(CreateDto.SoftSkillID[_i]);
          const additionalskill = await this.AdditionalSkillRepository.findOne({where:{ _id: softskillid }});
          softskill_arr.push(additionalskill);
        }
        resume.additionalSkills = softskill_arr;
      }

      if (CreateDto.CertID != null){
        var cert_arr = [];
        for (var _i = 0; _i < CreateDto.CertID.length; _i++) {
          const certid = new ObjectID(CreateDto.CertID[_i]);
          const certificate = await this.CertificateRepository.findOne({where:{ _id: certid }});
          cert_arr.push(certificate);
        }
        resume.certificates = cert_arr;
      }

      if (CreateDto.EducationID != null){
        var education_arr = [];
        for (var _i = 0; _i < CreateDto.EducationID.length; _i++) {
          const educationid = new ObjectID(CreateDto.EducationID[_i]);
          const educationhistory = await this.EducationHistoryRepository.findOne({where:{ _id: educationid }});
          education_arr.push(educationhistory);
        }
        resume.educationHistorys = education_arr;
      }

      if (CreateDto.WorkID != null){
        var work_arr = [];
        for (var _i = 0; _i < CreateDto.WorkID.length; _i++) {
          const workid = new ObjectID(CreateDto.WorkID[_i]);
          const workhistory = await this.WorkHistoryRepository.findOne({where:{ _id: workid }});
          work_arr.push(workhistory);
        }
      }
      if (CreateDto.PortID != null){
        var port_arr = [];
        for (var _i = 0; _i < CreateDto.PortID.length; _i++) {
          const portid = new ObjectID(CreateDto.PortID[_i]);
          const portfolio = await this.portModel.findOne({ _id: portid });
          port_arr.push(portfolio);
        }
        resume.portfolios = port_arr;
      }
      if (CreateDto.JobID != null){
        var job_arr = [];
        const jobid = new ObjectID(CreateDto.JobID);
        const interestedjob = await this.InterestedJobRepository.findOne({where:{ _id: jobid }});
        job_arr.push(interestedjob);
        resume.interestedJob = job_arr;

      }
      resume.Color = CreateDto.Color;
      resume.last_modified.push(isoTime);
      resume.modified_by.push(ip);
      return await this.resumeModel.create(resume);
    }
    
    throw new HttpException({
      status: HttpStatus.UNAUTHORIZED,
      error: 'Can not Patch Other Data',
    }, HttpStatus.UNAUTHORIZED);
  }
}

