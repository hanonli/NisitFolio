import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("AdditionalSkill")
export class AdditionalSkill {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  UserId: string;
  
  @Column()
  SoftSkill: string;
}

export default AdditionalSkill;