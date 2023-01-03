import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

/* 
스키마이름 + s = collection 이름 
*/
@Schema()
export class User {

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    nickname: string;

    @Prop({ required: true })
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);