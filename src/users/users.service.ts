import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '../constants';
import { debug } from 'console';

@Injectable()
export class UsersService {
  constructor( @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User> ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async delete(id): Promise<User> {
    const deleteUser = new this.userModel(id);
    return await deleteUser.remove();
  }

  async update(id, newValue: User): Promise<User> {
    const updateUser = await this.userModel.findById(id).exec();

    if (!updateUser._id) {
      debug('user not find');
    }
    await this.userModel.findByIdAndUpdate(id, { $push: { notes: newValue.notes } });
    return await this.userModel.findById(id).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findById(id: number): Promise<User> {
    return await this.userModel.findById(id).exec();
  }
  async findByName(name: string): Promise<User> {
    return await this.userModel.findOne(name).exec();
  }
  async findByToken(token: string): Promise<User> {
    return await this.userModel.findOne(token).exec();
  }
  async findOne(options: object): Promise<User> {
    return await this.userModel.findOne(options).exec();
  }
}
