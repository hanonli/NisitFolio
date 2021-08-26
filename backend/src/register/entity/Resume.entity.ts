import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Resume")
export class Resume {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Tag: string;

  @Column()
  Privacy: string;


}

export default Resume;