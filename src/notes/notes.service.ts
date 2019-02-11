import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Note } from './interfaces/note.interface';
import { CreateNoteDto } from './dto/create-note.dto';
import { NOTE_MODEL_PROVIDER } from '../constants';

// @Component()
@Injectable()
export class NotesService {
  constructor( @Inject(NOTE_MODEL_PROVIDER) private readonly noteModel: Model<Note> ) { }

  async addNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const createdNote = new this.noteModel(createNoteDto);
    return await createdNote.save();
  }

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const createdNote = new this.noteModel(createNoteDto);
    return await createdNote.save();
  }

  async findAll(): Promise<Note[]> {
    return await this.noteModel.find().exec();
  }
}
