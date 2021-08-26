import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Province")
export class Province {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  Country: string;

  @Column()
  Name: string;
}

export default Province;