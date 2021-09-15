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

  ) {}
  

  async createResume(CreateDto: CreateResumeDto ,ip:string){
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});

    const resume = new Resume(); 
    resume.UserId = CreateDto.UserId;
    resume.Privacy = "Public";

    const jobid = new ObjectID(CreateDto.JobID);

    const interestedjob = await this.InterestedJobRepository.findOne({where:{ _id: jobid }});
    resume.interestedJob = interestedjob;

    const softskill_arr = [];
    for (var _i = 0; _i < CreateDto.SoftSkillID.length; _i++) {
      const softskillid = new ObjectID(CreateDto.SoftSkillID[_i]);
      const additionalskill = await this.AdditionalSkillRepository.findOne({where:{ _id: softskillid }});
      softskill_arr.push(additionalskill);
    }
    resume.additionalSkills = softskill_arr;

    var cert_arr = [];
    for (var _i = 0; _i < CreateDto.CertID.length; _i++) {
      const certid = new ObjectID(CreateDto.CertID[_i]);
      const certificate = await this.CertificateRepository.findOne({where:{ _id: certid }});
      cert_arr.push(certificate);
      
    }
    resume.certificates = cert_arr;

    var education_arr = [];
    for (var _i = 0; _i < CreateDto.EducationID.length; _i++) {
      const educationid = new ObjectID(CreateDto.EducationID[_i]);
      const educationhistory = await this.EducationHistoryRepository.findOne({where:{ _id: educationid }});
      education_arr.push(educationhistory);
      
    }
    resume.educationHistorys = education_arr;

    var work_arr = [];
    for (var _i = 0; _i < CreateDto.WorkID.length; _i++) {
      const workid = new ObjectID(CreateDto.WorkID[_i]);
      const workhistory = await this.WorkHistoryRepository.findOne({where:{ _id: workid }});
      work_arr.push(workhistory);
      
    }
    resume.workHistorys = work_arr;

    var port_arr = [];
    for (var _i = 0; _i < CreateDto.PortID.length; _i++) {
      const portid = new ObjectID(CreateDto.PortID[_i]);
      const portfolio = await this.portModel.findOne({ _id: portid });
      port_arr.push(portfolio);
    }
    resume.portfolios = port_arr;

    resume.Color = CreateDto.Color;
    resume.create_time =  isoTime;
    resume.last_modified =  [isoTime] ;
    resume.modified_by = [ip];
    
    return await this.resumePictureRepository.save(resume);
  }

  async getResume(resumeId:string ){
    const id = new ObjectID(resumeId);
    return this.resumeModel.findById(id);
    
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
