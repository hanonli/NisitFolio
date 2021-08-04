import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Account")
export class Account {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  Email: string;

  @Column({ default: false })
  isEmailConfirmed: boolean;
  
  @Column()
  Username: string;
  
  @Column()
  Password: string;

  @Column()
  ProfilePic: string;

  @Column()
  Privacy: string;
}


export default Account;