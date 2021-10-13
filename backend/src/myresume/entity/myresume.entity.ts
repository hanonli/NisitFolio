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
  Password: string[];

  @Column()
  ProfilePic: string;

  @Column()
  Privacy: string;

  @Column()
  isEmailConfirmed: boolean;

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @Column()
  last_login:string[];
}

export default Account;


//--------------------UserInfo--------------------------//
@Entity("UserInfo")
export class Userinfo {

  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  UserId: string;

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

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

}

//--------------------AdditionalSkill--------------------------//
@Entity("AdditionalSkill")
export class AdditionalSkill {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  ResumeId: string[];

  @Column()
  UserId: string;

  @Column()
  AdditionalSkill: string;

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @ManyToOne(type => Resume, resume => resume.additionalSkills)
  resumes: Resume[];

}

//--------------------Certificate--------------------------//
@Entity("Certificate")
export class Certificate {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  UserId: string;
  
  @Column()
  ResumeId: string[];

  @Column()
  CertName: string;

  @Column()
  CertPic: string;
  
  @Column()
  CertYear: number;

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @ManyToOne(type => Resume, resume => resume.certificates)
  resumes: Resume[];

}


//--------------------EducationHistory--------------------------//
@Entity("EducationHistory")
export class EducationHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  ResumeId: string[];

  @Column()
  UserId: string;

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

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @ManyToOne(type => Resume, resume => resume.educationHistorys)
  resumes: Resume[];
}

//--------------------WorkHistory--------------------------//
@Entity("WorkHistory")
export class WorkHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  ResumeId: string[];

  @Column()
  UserId: string;

  @Column()
  Work_JobName: string;
  
  @Column()
  Work_JobType: string;
  
  @Column()
  Work_Company: string;
  
  @Column()
  Work_Start_Month: number;
  
  @Column()
  Work_End_Month: number;
  
  @Column()
  Work_Start_Year: number;
  
  @Column()
  Work_End_Year: number;

  @Column()
  Work_Salary: Float32Array;

  @Column()
  Work_Salary_Type: string;

  @Column()
  Work_Infomation: string;

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @ManyToOne(type => Resume, resume => resume.workHistorys)
  resumes: Resume[];

}

//--------------------InterestedJob--------------------------//
@Entity("InterestedJob")
export class InterestedJob {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  ResumeId: string[];

  @Column()
  UserId: string;

  @Column()
  Job_Objective: string[];

  @Column()
  Job_Score: Float32Array[];

  @Column()
  Job_JobName: string;

  @Column()
  Job_SkillName: string[];

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @OneToMany(type => Resume, resume => resume.interestedJob)
  resumes: Resume[];
}


//--------------------Portfolio--------------------------//
@Entity("Portfolio")
export class Portfolio {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Port_Tag: string[];

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
  PortId: string;

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
  _id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  ProfilePic: string;

  @Column()
  First: string;

  @Column()
  Last: string;

  @Column()
  Owner: string;

  @Column()
  Aboutme: string;

  @Column()
  Email: string;

  @Column()
  Location: string;

  @Column()
  TAG: string[];

  @Column()
  Privacy: string;

  @Column()
  Color: string;

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

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @Column()
  modified_by:string[];


}



