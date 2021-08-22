import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("UserInfo")
export class Userinfo {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  UserId: string;

  @Column()
  Firstname: string;
  
  @Column()
  Lastname: string;

  @Column()
  Birthday: string;

  @Column()
  AboutMe: string;

  @Column()
  EmailBusiness: string;

  @Column()
  Gender: string;

  

  /*@Column()
  courseId: ObjectId;*/
}

export default Userinfo;