import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { notesProviders } from './notes.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotesController],
  components: [
    NotesService,
    ...notesProviders,
  ],
})
export class UsersModule { }
