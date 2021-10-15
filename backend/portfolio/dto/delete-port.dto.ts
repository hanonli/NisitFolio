import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';
export class DeletePortfolioDto {

    UserId: ObjectId;

    PortId: ObjectId;
}