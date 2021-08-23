import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("Portfolio")
export class Portfolio {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Tag: string;
  
  @Column()
  Privacy: string;
}

export default Portfolio;