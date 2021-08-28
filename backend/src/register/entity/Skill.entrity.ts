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
}

export default Skill;