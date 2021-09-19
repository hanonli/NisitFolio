import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne, ManyToMany, OneToOne , JoinTable } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';


@Entity("Portfolio")
export class Portfolio3 {
  @ObjectIdColumn()
  _id?: ObjectId;

  @Column()
  UserId: string;

  @Column()
  Email: string;
  
  @Column()
  ProfilePic: string;
    
  @Column()
  Firstname: string;
    
  @Column()
  Lastname: string;
    
  @Column()
  Country: string;
    
  @Column()
  Province: string;
    
  @Column()
  City: string;
    
  @Column()
  AboutMe: string;
  
  @Column()
  Port_Tag: string[];

  @Column()
  Port_Privacy: string[];

  @Column()
  portfolioPictures: string[][];
  
  @Column()
  create_time:string[];

  @Column()
  last_modified:string[][];

  @Column()
  modified_by:string[][];

  @Column()
  ResumeId:string[][];

  
}

export default Portfolio3;