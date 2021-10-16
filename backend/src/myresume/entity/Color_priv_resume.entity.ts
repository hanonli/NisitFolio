import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne, ManyToMany, OneToOne , JoinTable } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';

//--------------------Account--------------------------//
@Entity("Public_resume")
export class Public_resume {
  @ObjectIdColumn()
  _id?: ObjectId;

  @Column()
  UserId: string;

  @Column()
  Color: string;

}

export default Public_resume;