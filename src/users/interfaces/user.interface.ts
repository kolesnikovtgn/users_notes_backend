import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly birthday: string;
  readonly email: string;
  readonly phone: string;
}