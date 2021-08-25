import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Skill")
export class Skill {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  JobTitle: string;

  @Column()
  Name: string;
}

export default Skill;