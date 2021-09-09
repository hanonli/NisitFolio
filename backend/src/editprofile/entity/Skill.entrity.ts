import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Skill")
export class Skill {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  jobTitle: string;

  @Column()
  skill: string;

  @Column()
  THSkill: string;
}

export default Skill;