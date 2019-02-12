import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '../constants';
import { debug } from 'console';

// @Component()
@Injectable()
export class UsersService {
  constructor( @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User> ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async delete(ID): Promise<User> {
    const deleteUser = new this.userModel(ID);
    return await deleteUser.remove();
  }

  async update(ID, newValue: User): Promise<User> {
    const updateUser = await this.userModel.findById(ID).exec();

    if (!updateUser._id) {
      debug('user not find');
    }
    await this.userModel.findByIdAndUpdate(ID, { $push: { notes: newValue.notes } });
    return await this.userModel.findById(ID).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findById(ID: number): Promise<User> {
    return await this.userModel.findById(ID).exec();
  }

  async findOne(options: object): Promise<User> {
    return await this.userModel.findOne(options).exec();
  }
}
