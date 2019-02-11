import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '../constants';

// @Component()
@Injectable()
export class UsersService {
  constructor( @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User> ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
