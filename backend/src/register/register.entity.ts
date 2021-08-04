import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

//--------------------Account--------------------------//
@Entity("Account")
export class PostAccount {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  Email: string;
  
  @Column()
  Password: string;

  @Column()
  ProfilePic: string;

  @Column()
  Privacy: string;
}


//--------------------Account--------------------------//
@Entity("UserInfo")
export class PostUserinfo {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  Firstname: string;
  
  @Column()
  Lastname: string;

  @Column()
  Birthday: string;

  @Column()
  Gender: string;

  /*@Column()
  courseId: ObjectId;*/
}


//--------------------AdditionalSkill--------------------------//
@Entity("AdditionalSkill")
export class PostAdditionalSkill {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  UserId: number;
  
  @Column()
  SoftSkill: string;
}
//--------------------Bookmark--------------------------//
@Entity("Bookmark")
export class PostBookmark {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  userId: number;

  @Column()
  Link: string;
  
  @Column()
  Type: string;
}

//--------------------Certificate--------------------------//
@Entity("Certificate")
export class PostCertificate {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: number;

  @Column()
  Pic: string;
  
  @Column()
  Year: number;
}

//--------------------City--------------------------//
@Entity("City")
export class PostCity {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: number;

  @Column()
  Name: string;
}

//--------------------Country--------------------------//
@Entity("Country")
export class PostCountry {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: number;

  @Column()
  Name: string;
}

//--------------------EducationHistory--------------------------//
@Entity("EducationHistory")
export class PostEducationHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: number;

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
  StartTime: Timestamp;   //ยังไม่มั่นใจ

  @Column()
  EndTime: Timestamp;   //ยังไม่มั่นใจ
}


//--------------------InterestedJob--------------------------//
@Entity("InterestedJob")
export class PostInterestedJob {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: number;

  @Column()
  objective: string;
}

//--------------------JobTitle--------------------------//
@Entity("JobTitle")
export class PostJobTitle {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: number;

  @Column()
  Name: string;
}

//--------------------Portfolio--------------------------//
@Entity("Portfolio")
export class PostPortfolio {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: number;

  @Column()
  Tag: string;
  
  @Column()
  Privacy: string;
}



//--------------------PortfolioPicture--------------------------//
@Entity("PortfolioPicture")
export class PostPortfolioPicture {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: number;

  @Column()
  Pic: string;
  
  @Column()
  Desciption: string;
}

//--------------------Province--------------------------//
@Entity("Province")
export class PostProvince {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: number;

  @Column()
  Name: string;
}

