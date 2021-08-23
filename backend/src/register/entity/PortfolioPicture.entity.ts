
import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("PortfolioPicture")
export class PortfolioPicture {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Pic: string;
  
  @Column()
  Desciption: string;
}

export default PortfolioPicture;