import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Certificate")
export class Certificate {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Pic: string;
  
  @Column()
  Year: number;
}

export default Certificate;