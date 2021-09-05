import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';
import { ObjectID as ObjectIDType} from 'typeorm'

@Entity("EducationHistory")
export class EducationHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @ObjectIdColumn()
  UserId: ObjectId;

  @Column()
  Degree: string;
  
  @Column()
  Facalty: string;
  
  @Column()
  Field_of_study: string;
  
  @Column()
  Academy: string;
  
  @Column()
  Grade: Float32Array;
   

  @Column()
  Education_End_Year: number;   
}

@Entity("WorkHistory")
export class WorkHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @ObjectIdColumn()
  UserId: ObjectId;

  @Column()
  Work_JobName: string;
  
  @Column()
  Work_JobType: string;
  
  @Column()
  Company: string;
  
  @Column()
  Work_Start_Month: number;
  
  @Column()
  Work_End_Month: number;
  
  @Column()
  Work_Start_Year: number;
  
  @Column()
  Work_End_Year: number;

  @Column()
  Salary: Float32Array;

  @Column()
  Infomation: string;

}

@Entity("Certificate")
export class Certificate {
  @ObjectIdColumn()
  id?: ObjectId;

  @ObjectIdColumn()
  UserId: ObjectId;
  
  @ObjectIdColumn()
  ResumeId?: ObjectId;

  @Column()
  CertName: string;

  @Column()
  CertPic: string;
  
  @Column()
  CertYear: number;
}

@Entity("Folio")
export class Folio {

}
