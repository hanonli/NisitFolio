import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("HardSkill")
export class HardSkill {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  Type: string;

  @Column()
  THType: string;

  @Column()
  Name: string;

  @Column()
  THName: string;
}

export default HardSkill;