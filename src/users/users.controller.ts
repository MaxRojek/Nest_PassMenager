import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../model/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private serv: UsersService) { }

  // @Get()
  // public async getAll(): Promise<String[]> {
  //   return await this.serv.getAll()
  // }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async findOne(@Body() id: number): Promise<User> {
    return await this.serv.findOne(id);
  }

  @Post()
  public async post(@Body() dto: User): Promise<User> {
    return this.serv.create(dto);
  }
}
