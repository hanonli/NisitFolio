import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("DDCity")
export class DDCity {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  NameProvince: string;
  
  @Column()
  NameCity: string;

}

export default DDCity;