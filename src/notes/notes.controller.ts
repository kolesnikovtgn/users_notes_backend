import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './interfaces/note.interface';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) { }

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    this.notesService.create(createNoteDto);
  }

  @Get()
  async findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }
}
