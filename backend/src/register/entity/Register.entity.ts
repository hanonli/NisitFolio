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

  @ObjectIdColumn()
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

  /*@OneToMany(type => AdditionalSkill, additionalSkill => additionalSkill.userinfo)
  additionalSkills: AdditionalSkill[];*/
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
  Job_Objective: string[];

  @Column()
  Job_Score: Float32Array[];

  @Column()
  Job_JobName: string;

  @Column()
  Job_SkillName: string[];
}





