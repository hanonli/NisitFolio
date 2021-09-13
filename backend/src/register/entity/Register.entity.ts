import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne, ManyToMany, OneToOne , JoinTable } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';

//--------------------Account--------------------------//
@Entity("Account")
export class Account {
  @ObjectIdColumn()
  _id?: ObjectId;

  @Column()
  Email: string;
  
  @Column()
  Password: string;

  @Column()
  ProfilePic: string;

  @Column()
  Privacy: string;

  @Column()
  isEmailConfirmed: boolean;
}

export default Account;


//--------------------UserInfo--------------------------//
@Entity("UserInfo")
export class Userinfo {

  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  UserId: ObjectId;

  @Column()
  Firstname: string;
  
  @Column()
  Lastname: string;

  @Column()
  Birthday: string;

  @Column()
  AboutMe: string;

  @Column()
  Email2nd: string;

  @Column()
  Gender: string;

  @Column()
  Country: string;

  @Column()
  Province: string;

  @Column()
  City: string;

}

//--------------------AdditionalSkill--------------------------//
@Entity("AdditionalSkill")
export class AdditionalSkill {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  UserId: ObjectId;

  @Column()
  SoftSkill: string;

  @ManyToOne(type => Resume, resume => resume.additionalSkills)
  resumes: Resume[];

}

//--------------------Certificate--------------------------//
@Entity("Certificate")
export class Certificate {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  UserId: ObjectId;
  
  @ObjectIdColumn()
  ResumeId?: ObjectId;

  @Column()
  CertName: string;

  @Column()
  CertPic: string;
  
  @Column()
  CertYear: number;

  @ManyToOne(type => Resume, resume => resume.certificates)
  resumes: Resume[];

}


//--------------------EducationHistory--------------------------//
@Entity("EducationHistory")
export class EducationHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: ObjectId;

  @Column()
  Degree: string;
  
  @Column()
  Facalty: string;
  
  @Column()
  Field_of_study: string;
  
  @Column()
  Academy: string;
  
  @Column()
  Grade: Float32Array;
   
  @Column()
  Education_End_Year: number;   

  @ManyToOne(type => Resume, resume => resume.educationHistorys)
  resumes: Resume[];
}

//--------------------WorkHistory--------------------------//
@Entity("WorkHistory")
export class WorkHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: ObjectId;

  @Column()
  Work_JobName: string;
  
  @Column()
  Work_JobType: string;
  
  @Column()
  Company: string;
  
  @Column()
  Work_Start_Month: number;
  
  @Column()
  Work_End_Month: number;
  
  @Column()
  Work_Start_Year: number;
  
  @Column()
  Work_End_Year: number;

  @Column()
  Salary: Float32Array;

  @Column()
  Infomation: string;

  @ManyToOne(type => Resume, resume => resume.workHistorys)
  resumes: Resume[];

}

//--------------------InterestedJob--------------------------//
@Entity("InterestedJob")
export class InterestedJob {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: ObjectId;

  @Column()
  Job_Objective: string[];

  @Column()
  Job_Score: Float32Array[];

  @Column()
  Job_JobName: string;

  @Column()
  Job_SkillName: string[];

  @OneToMany(type => Resume, resume => resume.interestedJob)
  resumes: Resume[];
}


//--------------------Portfolio--------------------------//
@Entity("Portfolio")
export class Portfolio {
  @ObjectIdColumn()
  _id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Port_Tag: string;

  @Column()
  Port_Privacy: string;

  @OneToMany(type => PortfolioPicture, portfolioPicture => portfolioPicture.portfolio)
  portfolioPictures: PortfolioPicture[];

  @ManyToOne(type => Resume, resume => resume.portfolios)
  resumes: Resume[];
}

//--------------------PortfolioPicture--------------------------//
@Entity("PortfolioPicture")
export class PortfolioPicture {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  PortId: ObjectId;

  @Column()
  Pic: string[];

  @Column()
  Description: string[];

  @ManyToOne(type => Portfolio, portfolio => portfolio.portfolioPictures)
  portfolio: Portfolio;

}

//-----------------Resume---------------------------//
@Entity("Resume")
export class Resume {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  TAG: string[];

  @Column()
  Privacy: string;

  @OneToMany(type => EducationHistory, educationHistory => educationHistory.resumes)
  educationHistorys: EducationHistory[];

  @OneToMany(type => WorkHistory, workHistory => workHistory.resumes)
  workHistorys: WorkHistory[];

  @OneToMany(type => AdditionalSkill, additionalSkill => additionalSkill.resumes)
  additionalSkills: AdditionalSkill[];

  @OneToMany(type => Certificate, certificate => certificate.resumes)
  certificates: Certificate[];

  @OneToMany(type => Portfolio, portfolio => portfolio.resumes)
  portfolios: Portfolio[];

  @ManyToOne(type => InterestedJob, interestedJob => interestedJob.resumes)
  interestedJob: InterestedJob;

}



