import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne, ManyToMany, OneToOne , JoinTable } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';

@Entity("Resume")
export class Resume3 {
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
  AboutMe: string;

  @Column()
  Email: string;

  @Column()
  Location: string;

  @Column()
  ProfilePic_URL: string;

  @Column()
  TAG: string[];

  @Column()
  Privacy: string;

  @Column()
  Color: string;

  @Column()
  educationHistorys: string[];

  @Column()
  workHistorys: string[];

  @Column()
  additionalSkills: string[];

  @Column()
  certificates: string[];

  @Column()
  portfolios: string[];

  @Column()
  interestedJob: string[];

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @Column()
  modified_by:string[];


}