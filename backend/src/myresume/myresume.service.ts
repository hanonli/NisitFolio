import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/myresume.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Resume} from './entity/myresume.entity'
import { ObjectID } from 'mongodb';

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

  ) {}
  
  async createResume(CreateDto: CreateResumeDto ){
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
      const portfolio = await this.portRepository.findOne({where:{ _id: portid }});
      port_arr.push(portfolio);
    }
    resume.portfolios = port_arr;
    
    return await this.resumePictureRepository.save(resume);
  }

}
