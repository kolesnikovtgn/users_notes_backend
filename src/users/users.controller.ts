import { Controller, Get, Post, Body, Delete, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @UseGuards(AuthGuard('local'))
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Delete()
  @UseGuards(AuthGuard('local'))
  async delete(@Body() id) {
    this.usersService.delete(id);
  }

  @Put()
  @UseGuards(AuthGuard('local'))
  async update(@Body() id, @Body() newValue: User) {
    this.usersService.update(id, newValue);
  }

  @Get()
  @UseGuards(AuthGuard('local'))
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
