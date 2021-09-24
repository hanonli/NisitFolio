import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';
import { ObjectID as ObjectIDType} from 'typeorm'

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

@Entity("InterestedJob")
export class InterestedJob {
  @ObjectIdColumn()
  _id?: ObjectIDType;
  
  @ObjectIdColumn()
  UserId: ObjectIDType;

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
