import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {

    }

    async findAllUser() : Promise<User[]> {
        return this.userModel.find().exec();
    }

    async createUser( userDto : UsersDto ) : Promise<User> {
        const createdUser = new this.userModel(userDto);
        return createdUser.save();
    }

    async deleteUserOne( id : string ) : Promise<void> {
        const deletedUser = new this.userModel({ _id : id });
        return deletedUser.deleteOne();
    }

    async updateUserOne( id : string, userDto : UsersDto ) : Promise<User> {
        const updatedUser = new this.userModel();
        return updatedUser.updateOne({ _id : id }, {nickname:'qqqq'}, (result) => {Logger.log(result)});
    }

}
