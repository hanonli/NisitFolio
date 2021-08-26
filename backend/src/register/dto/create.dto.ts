import { IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';
//STAR
export class CreateDtoTRUE {

  @IsNotEmpty()
  Email: string;

  @IsNotEmpty()
  Password: string;

  ProfilePic: string;

  Privacy: string;

  isEmailConfirmed: boolean;

  @IsNotEmpty()
  Firstname: string;
  
  @IsNotEmpty()
  Lastname: string;
  
  @IsNotEmpty()
  Birthday: string;

  @IsNotEmpty()
  Gender: string;

  accountD?: ObjectId;

  //id?: ObjectId;
  
  UserId: string;

  NameCountry: string;

  NameProvince: string;

  NameCity: string;

  AboutMe: string;

  EmailBusiness: string;


  //id?: ObjectId;
  
  //UserId: string;

  @IsNotEmpty()
  Degree: string;
  
  @IsNotEmpty()
  Facalty: string;
  
  Find_of_study: string;
  
  @IsNotEmpty()
  Academy: string;
  
  Grade: string;
  
  @IsNotEmpty()
  Start_Year: Number;

  End_Year: Number;

  //UserId: string;

  @IsNotEmpty()
  JobName_WH: string;

  @IsNotEmpty()
  JobType: string;

  Company: string;

  @IsNotEmpty()
  Start_Month: Number;

  End_Month: Number;

  @IsNotEmpty()
  Start_Year_WH: Number;

  End_Year_WH: Number;

  Salary: Float32Array;

  Information: string;

  NameSalary: string;

  //UserId: string;

  @IsNotEmpty()
  Tag: string;

  PrivacyFOl: string;

  @IsNotEmpty()
  Pic: string;

  @IsNotEmpty()
  Year: number;

  //id?: ObjectId;
  
  //UserId: string;

  Objective: string;

  Score: Number;

  JobName: string;

  SkillName: string;

  //id?: ObjectId;

  //UserId: string;
  
  SoftSkill: string;
}
//END111
//-----------------sub
export class CreateDtoDDSCountry {

  NameCountry: string;

}
//------------------endsub
export class CreateDto1 {

    @IsNotEmpty()
    Email: string;

    @IsNotEmpty()
    Password: string;

    ProfilePic: string;

    Privacy: string;

    isEmailConfirmed: boolean;

    @IsNotEmpty()
    Firstname: string;
    
    @IsNotEmpty()
    Lastname: string;
    
    @IsNotEmpty()
    Birthday: string;

    @IsNotEmpty()
    Gender: string;

    accountD?: ObjectId;
}
export class CreateDto2 {

    //id?: ObjectId;
    
    UserId: string;
  
    NameCountry: string;

    NameProvince: string;

    NameCity: string;

    AboutMe: string;

    EmailBusiness: string;

  }
export class CreateDto3 {

    //id?: ObjectId;
    
    UserId: string;
  
    @IsNotEmpty()
    Degree: string;
    
    @IsNotEmpty()
    Facalty: string;
    
    Find_of_study: string;
    
    @IsNotEmpty()
    Academy: string;
    
    Grade: string;
    
    @IsNotEmpty()
    Start_Year: Number;
  
    End_Year: Number;
  }

export class CreateDto4 {

    UserId: string;

    @IsNotEmpty()
    JobName: string;
  
    @IsNotEmpty()
    JobType: string;
  
    Company: string;
  
    @IsNotEmpty()
    Start_Month: Number;
  
    End_Month: Number;
  
    @IsNotEmpty()
    Start_Year: Number;
  
    End_Year: Number;
  
    Salary: Float32Array;
  
    Information: string;
  
    NameSalary: string;
  }

export class CreateDto5 {

    UserId: string;

    @IsNotEmpty()
    Tag: string;

    Privacy: string;

    @IsNotEmpty()
    Pic: string;
  
    @IsNotEmpty()
    Year: number;
  }

export class CreateDto6 {

    //id?: ObjectId;
    
    UserId: string;
  
    Objective: string;
  
    Score: Number;
  
    JobName: string;
  
    SkillName: string;
  }
  
export class CreateDto7 {

    //id?: ObjectId;
  
    UserId: string;
    
    SoftSkill: string;
  }
