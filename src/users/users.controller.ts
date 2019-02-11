import { Controller, Get, Post, Body, Param, Delete, Req, Patch, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { Note } from './interfaces/note.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Delete()
  async delete(@Body() id) {
    this.usersService.delete(id);
  }

  @Put()
  async update(@Body() id, @Body() newValue: User) {
    this.usersService.update(id, newValue);
  }

  @Patch()
  async addNote(@Body() id, @Body() newNote: Note) {
    this.usersService.addNote(id, newNote);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
