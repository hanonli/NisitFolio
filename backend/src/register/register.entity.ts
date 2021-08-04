/*
import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

//----------------------------------------------//*/
import { Entity, Column, ObjectIdColumn } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';

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


//--------------------UserInfo--------------------------//
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
  UserId: string;
  
  @Column()
  SoftSkill: string;
}
//--------------------Bookmark--------------------------//
@Entity("Bookmark")
export class PostBookmark {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  userId: string;

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
  UserId: string;

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
  UserId: string;

  @Column()
  Name: string;
}

//--------------------Country--------------------------//
@Entity("Country")
export class PostCountry {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Name: string;
}

//--------------------EducationHistory--------------------------//
@Entity("EducationHistory")
export class PostEducationHistory {
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


//--------------------InterestedJob--------------------------//
@Entity("InterestedJob")
export class PostInterestedJob {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  objective: string;
}

//--------------------JobTitle--------------------------//
@Entity("JobTitle")
export class PostJobTitle {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Name: string;
}

//--------------------Portfolio--------------------------//
@Entity("Portfolio")
export class PostPortfolio {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

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
  UserId: string;

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
  UserId: string;

  @Column()
  Name: string;
}

//--------------------Resume--------------------------//
@Entity("Resume")
export class PostResume {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Tag: string;

  @Column()
  Privacy: string;


}

//--------------------SalaryType--------------------------//
@Entity("SalaryType")
export class PostSalaryType {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Name: string;


}
//--------------------Skill--------------------------//
@Entity("Skill")
export class PostSkill {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Name: string;


}

//--------------------UserSkill--------------------------//
@Entity("UserSkill")
export class PostUserSkill {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  Score: Number;


}


//--------------------WorkHistory--------------------------//
@Entity("WorkHistory")
export class PostWorkHistory {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @Column()
  UserId: string;

  @Column()
  JobName: string;
  
  @Column()
  JobType: string;
  
  @Column()
  Company: string;
  
  @Column()
  Start_Month: Number;
  
  @Column()
  End_Month: Number;
  
  @Column()
  Start_Year: Number;
  
  @Column()
  End_Year: Number;

  @Column()
  Salary: Float32Array;

  @Column()
  Infomation: string;

}
