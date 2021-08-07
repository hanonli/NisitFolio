import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("EducationHistory")
export class EducationHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Degree: string;
  
  @Column()
  Facalty: string;
  
  @Column()
  Find_of_study: string;
  
  @Column()
  Academy: string;
  
  @Column()
  Grade: string;
  
  @Column()
  Start_Year: Number;

  @Column()
  End_Year: Number;
}

export default EducationHistory;