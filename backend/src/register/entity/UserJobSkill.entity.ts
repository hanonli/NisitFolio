import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Userjobskills")
export class userjobskills {

  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Objective: string;

  @Column()
  Score: Number;

  @Column()
  JobName: string;

  @Column()
  SkillName: string;
}

export default userjobskills;
