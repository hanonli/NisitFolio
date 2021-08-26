import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("WorkHistory")
export class WorkHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  JobName: string;
  
  @Column()
  JobType: string;
  
  @Column()
  Company: string;
  
  @Column()
  Start_Month: Number;
  
  @Column()
  End_Month: Number;
  
  @Column()
  Start_Year: Number;
  
  @Column()
  End_Year: Number;

  @Column()
  Salary: Float32Array;

  @Column()
  Information: string;

}

export default WorkHistory;