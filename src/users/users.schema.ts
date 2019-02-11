import * as mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
  likeCount: {
    type: String,
    required: false,
  },
  tags: {
    type: String, // mongoose.Schema.Types.Mixed
    required: false,
  },
  dateCreate: {
    type: String,
    required: true,
  },
});

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
  notes: [NoteSchema],
});
