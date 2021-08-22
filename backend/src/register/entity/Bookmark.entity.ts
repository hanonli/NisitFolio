import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Bookmark")
export class Bookmark {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  userId: string;

  @Column()
  Link: string;
  
  @Column()
  Type: string;
}

export default Bookmark;