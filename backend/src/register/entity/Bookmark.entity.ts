import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Bookmark")
export class Bookmark {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @ObjectIdColumn()
  UserId: ObjectId;

  @Column()
  Link: string;
  
  @Column()
  Type: string;
}

export default Bookmark;