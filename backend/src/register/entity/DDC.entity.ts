import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("DDC")
export class DDC {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  NameCountry: string;

}

export default DDC;