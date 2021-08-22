import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

//--------------------Account--------------------------//
@Entity("Account")
export class PostAccount {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  Email: string;
  
  @Column()
  Password: string;

  @Column()
  ProfilePic: string;

  @Column()
  Privacy: string;
}


//--------------------Account--------------------------//
@Entity("UserInfo")
export class PostUserinfo {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  Firstname: string;
  
  @Column()
  Lastname: string;

  @Column()
  Birthday: string;

  @Column()
  Gender: string;

  /*@Column()
  courseId: ObjectId;*/
}

