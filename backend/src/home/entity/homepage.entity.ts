import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';

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

@Entity("Account")
export class Account {
  @ObjectIdColumn()
  id?: ObjectId;

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