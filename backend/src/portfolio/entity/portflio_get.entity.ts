import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';

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

  @ManyToOne(type => Portfolio4, portfolio => portfolio.portfolioPictures)
  portfolio: Portfolio4;

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

}

@Entity("Portfolio")
export class Portfolio4 {
  @ObjectIdColumn()
  id?: ObjectId;
  
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

  @OneToMany(type => PortfolioPicture, portfolioPicture => portfolioPicture.portfolio)
  portfolioPictures: PortfolioPicture[];

  @Column()
  create_time:string;

  @Column()
  last_modified:string[];

  @Column()
  modified_by:string[];

}