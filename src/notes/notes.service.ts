import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';

import { Note } from './interfaces/note.interface';
import { CreateNoteDto } from './dto/create-note.dto';
import { USER_MODEL_PROVIDER } from '../constants';

@Component()
export class UsersService {
  constructor( @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User> ) { }

  async addNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const createdNote = new this.userModel(createNoteDto);
    return await createdNote.save();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
