import { PassportLocalDocument } from 'mongoose';
import { Note } from './note.interface';

export interface User extends PassportLocalDocument {
  readonly name: string;
  readonly password: string;
  readonly birthday: string;
  readonly email: string;
  readonly phone: string;
  readonly notes: Note[];
}
