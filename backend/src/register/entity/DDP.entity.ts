import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("DDP")
export class DDP {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  NameCountry: string;
  
  @Column()
  NameProvince: string;

}

export default DDP;