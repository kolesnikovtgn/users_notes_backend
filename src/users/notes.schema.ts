import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
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
