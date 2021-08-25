import { Entity, Column, ObjectIdColumn,OneToMany } from 'typeorm'; 
import { ObjectId } from 'mongodb';



@Entity("itest")
export class itest {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  list: string;
}

export default itest;