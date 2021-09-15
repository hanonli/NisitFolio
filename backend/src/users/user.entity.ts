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
  public Password: string[];

  @Column()
  public ProfilePic: string;

  @Column()
  public Privacy: string;

  @Column()
  public isEmailConfirmed: boolean;

  @Column()
  public last_login: string;

  @Column()
  public last_modified: string[];

  @Column()
  public IP: string;
}
 
export default UserReq ;