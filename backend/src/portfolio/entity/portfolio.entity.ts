import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne } from 'typeorm'; 
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
  
  @Column()
  ProfilePic:string;

  @Column()
  tags:string[];

  @Column()
  AvgScore:number;

  @Column()
  totalBookmark:number;

}

//--------------------AdditionalSkill--------------------------//
@Entity("AdditionalSkill")
export class AdditionalSkill {
  @ObjectIdColumn()
  id?: ObjectId;

  @ObjectIdColumn()
  UserId: ObjectId;

  @Column()
  SoftSkill: string;

  /*@ManyToOne(type => Userinfo, userinfo => userinfo.additionalSkills)
  userinfo: Userinfo;*/

}

//--------------------Certificate--------------------------//
@Entity("Certificate")
export class Certificate {
  @ObjectIdColumn()
  id?: ObjectId;

  @ObjectIdColumn()
  UserId: ObjectId;
  
  @ObjectIdColumn()
  ResumeId?: ObjectId;

  @Column()
  CertName: string;

  @Column()
  CertPic: string;
  
  @Column()
  CertYear: number;
}


//--------------------EducationHistory--------------------------//
@Entity("EducationHistory")
export class EducationHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @ObjectIdColumn()
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
}

//--------------------WorkHistory--------------------------//
@Entity("WorkHistory")
export class WorkHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @ObjectIdColumn()
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

}

//--------------------InterestedJob--------------------------//
@Entity("InterestedJob")
export class InterestedJob {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @ObjectIdColumn()
  UserId: ObjectId;

  @Column()
  Job_Objective: string;

  @Column()
  Job_Score: Float32Array;

  @Column()
  Job_JobName: string;

  @Column()
  Job_SkillName: string;
}

//--------------------Portfolio--------------------------//
@Entity("Portfolio")
export class Portfolio {
  @ObjectIdColumn()
  _id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Port_Name: string;

  @Column()
  Port_Info: string;

  @Column()
  Owner: string;

  @Column()
  totalBookmark: number;
  
  @Column()
  Port_Tag: string[];

  @Column()
  Port_Privacy: string;

  @Column()
  Port_Date: string;

  //@OneToMany(type => PortfolioPicture, portfolioPicture => portfolioPicture.portfolio)
  @Column()
  portfolioPictures: PortfolioPicture[];

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @Column()
  modified_by:string[];

  @Column()
  Email:string;

  @Column()
  ProfilePic: string;

}

//--------------------PortfolioPicture--------------------------//
@Entity("PortfolioPicture")
export class PortfolioPicture {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @ObjectIdColumn()
  PortId: ObjectId;

  @Column()
  Pic: string[];

  @Column()
  Description: string[];

  @ManyToOne(type => Portfolio, portfolio => portfolio.portfolioPictures)
  portfolio: Portfolio;

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

}





