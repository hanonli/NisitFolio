import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Account")
class UserReq {
  @ObjectIdColumn()
  id?: ObjectId;
 
  @Column({ unique: true })
  public Email: string;

  /*@Column({ unique: true })
  public username: string;*/
  
  @Column()
  public Password: string;

  @Column()
  public ProfilePic: string;

  @Column()
  public Privacy: string;

  @Column()
  public isEmailConfirmed: boolean;
}
 
export default UserReq ;