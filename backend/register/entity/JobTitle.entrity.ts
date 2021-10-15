import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("JobTitle")
export class JobTitle {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  Name: string;

  @Column()
  THName: string;
}

export default JobTitle;