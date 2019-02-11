import { Document } from 'mongoose';
// import { Note } from './note.interface';

export interface User extends Document {
  readonly name: string;
  readonly password: string;
  readonly birthday: string;
  readonly email: string;
  readonly phone: string;
  readonly notes: string[];
}
