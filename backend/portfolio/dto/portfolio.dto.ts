import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';
export class CreatePortfolioDto {

    UserId: string;

    Port_Tag: string[];
 
    Port_Privacy: string;

    PortId: ObjectId;

    Pic: string[];

    Description: string[];

    Port_Date: string;
    
    Port_Name: string;

    Port_Info: string;

    
}