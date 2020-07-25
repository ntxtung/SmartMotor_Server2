import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserType } from './dto/user.dto';
import { User } from './user.document';
import { CreateUserInput } from './dto/create-user.dto'

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async create(createUserDto: CreateUserInput): Promise<UserType> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<UserType[]> {
        return await this.userModel.find().exec();
    }
    async findOneById(id: string): Promise<UserType | undefined> {
        return await this.userModel.findOne({ _id: id });
    }

    async findOneByUsername(username: String): Promise<UserType | undefined> {
        return await this.userModel.findOne({ username: username });
    }

    async delete(id: string): Promise<UserType> {
        return await this.userModel.findByIdAndRemove(id);
    }
    async update(id: string, user: User): Promise<UserType> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }
}
