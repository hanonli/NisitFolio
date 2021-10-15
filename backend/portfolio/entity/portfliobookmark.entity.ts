import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';

@Entity("Bookmark")
export class Bookmark {

    @ObjectIdColumn()
    _id?: ObjectId;

    @Column()
  userId: String;
  
  @Column()
  link: String;

  @Column()
  thatUserId: String;

  @Column()
  type: String;

  @Column()
  id: ObjectId;

    @Column()
  details: any;

  @Column()
  totalBookmark: Number;

  @Column()
  updatedAt: Date;

  @Column()
  createdAt: Date;

}