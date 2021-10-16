import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne, ManyToMany, OneToOne , JoinTable } from 'typeorm'; 
import { ObjectId, Timestamp } from 'mongodb';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

//--------------------Account--------------------------//
export type Public_resumeDocument = Public_resume2 & Document;

Schema({ collection: 'Public_resume' })
export class Public_resume2 {
  @ObjectIdColumn()
  _id?: ObjectId;

  @Prop()
  UserId: string;

  @Prop()
  Color: string;

}

export const Public_resumeSchema = SchemaFactory.createForClass(Public_resume2);


