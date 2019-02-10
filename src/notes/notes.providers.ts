import { Connection } from 'mongoose';

import { NoteSchema } from './notes.schema';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const usersProviders = [
  {
    provide: USER_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('User', NoteSchema),
    inject: [DB_PROVIDER],
  },
];
