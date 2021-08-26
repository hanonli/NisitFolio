import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("City")
export class City {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  Country: string;
  
  @Column()
  Province: string;

  @Column()
  Name: string;
}

export default City;