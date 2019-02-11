import * as mongoose from 'mongoose';
// import { NoteSchema } from './notes.schema';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  notes: {
    type: Array,
    required: false,
  },
});
