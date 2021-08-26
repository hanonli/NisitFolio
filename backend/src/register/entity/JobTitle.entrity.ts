import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("JobTitle")
export class JobTitle {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  Name: string;
}

export default JobTitle;