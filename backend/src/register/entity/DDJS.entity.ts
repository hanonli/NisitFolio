import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("DDJS")
export class DDJS {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  Namejob: string;
  
  @Column()
  Nameskill: string;

}

export default DDJS;