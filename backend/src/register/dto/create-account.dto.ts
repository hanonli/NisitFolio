import { IsNotEmpty, IsNumberString } from 'class-validator';
//import { ObjectId } from 'mongodb';

export class CreateAccountDto {

    UserId: string;

    @IsNotEmpty()
    Email: string;

    @IsNotEmpty()
    Password: string;

    ProfilePic: string;

    Privacy: string;

 
}


export class CreateUserinfoDto {

    UserId: string;

    @IsNotEmpty()
    Firstname: string;
    
    @IsNotEmpty()
    Lastname: string;
    
    @IsNotEmpty()
    Birthday: string;
  
    AboutMe: string;

    EmailBusiness: string;
  
    //accountD?: ObjectId;
  }

  //--------------------AdditionalSkill--------------------------//
export class CreateAdditionalSkill {

  //id?: ObjectId;

  UserId: string;
  
  SoftSkill: string;
}
//--------------------Bookmark--------------------------//

export class CreateBookmark {

  //id?: ObjectId;
  
  userId: string;

  Link: string;
  
  Type: string;
}

//--------------------Certificate--------------------------//

export class CreateCertificate {

  //id?: ObjectId;
  
  UserId: string;

  @IsNotEmpty()
  Pic: string;
  
  @IsNotEmpty()
  Year: number;
}

//--------------------City--------------------------//

export class CreateCity {

  //id?: ObjectId;
  
  UserId: string;

  Name: string;
}

//--------------------Country--------------------------//
export class CreateCountry {

  //id?: ObjectId;
  
  UserId: string;

  Name: string;
}

//--------------------EducationHistory--------------------------//
export class CreateEducationHistory {

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


//--------------------InterestedJob--------------------------//
export class CreateInterestedJob {

  //id?: ObjectId;
  
  UserId: string;

  objective: string;
}

//--------------------JobTitle--------------------------//
export class CreateJobTitle {

  //id?: ObjectId;
  
  UserId: string;

  @IsNotEmpty()
  Name: string;
}

//--------------------Portfolio--------------------------//
export class CreatePortfolio {

  //id?: ObjectId;
  
  UserId: string;

  Tag: string;

  Privacy: string;
}



//--------------------PortfolioPicture--------------------------//
export class CreatePortfolioPicture {

  //id?: ObjectId;

  UserId: string;

  Pic: string;

  Desciption: string;
}

//--------------------Province--------------------------//
export class CreateProvince {

  //id?: ObjectId;
  
  UserId: string;

  Name: string;
}

//--------------------Resume--------------------------//
export class CreateResume {

  //id?: ObjectId;
  
  UserId: string;

  @IsNotEmpty()
  Tag: string;

  Privacy: string;


}

//--------------------SalaryType--------------------------//

export class CreateSalaryType {

  //id?: ObjectId;
  
  UserId: string;

  Name: string;


}
//--------------------Skill--------------------------//
export class CreateSkill {

  //id?: ObjectId;
  
  UserId: string;

  Name: string;


}

//--------------------UserSkill--------------------------//
export class CreateUserSkill {

  //id?: ObjectId;

  UserId: string;

  Score: Number;


}


//--------------------WorkHistory--------------------------//
export class CreateWorkHistory {

  //id?: ObjectId;
  
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

}

export class CreateUserJobSkill {

  //id?: ObjectId;
  
  UserId: string;

  Objective: string;

  Score: Number;

  JobName: string;

  SkillName: string;
}

