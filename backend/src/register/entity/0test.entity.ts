import { Entity, Column, ObjectIdColumn,OneToMany } from 'typeorm'; 
import { ObjectId } from 'mongodb';
import itest from './1test.entity';


@Entity("otest")
export class otest {
  @ObjectIdColumn()
  id?: ObjectId;
  
  //@OneToMany(type => itest, itest => itest.list)
  @Column()
  list: itest[];

}

export default otest;