import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("DDHS")
export class DDHS {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  Hardskill: string;

}

export default DDHS;