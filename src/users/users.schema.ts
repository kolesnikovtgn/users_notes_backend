import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
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
    required: false,
  },
});

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  birthday: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  notes: [NoteSchema],
});
UserSchema.plugin(passportLocalMongoose);
