import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';
export class CreatePortfolioDto {

    UserId: ObjectId;

    Port_Tag: string;
 
    Port_Privacy: string;

    PortId: ObjectId;

    Pic: string[];

    Description: string[];
}