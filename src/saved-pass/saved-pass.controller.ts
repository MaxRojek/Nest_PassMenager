import { Body, Controller, Get, Logger, Param, Post, UseGuards, Headers } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SavedPass } from '../model/saved-pass.entity';
import { SavedPassService } from './saved-pass.service';
import { User } from '../model/user.entity';
import { SavedPassInterface } from '../types/SavedPassInterface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('saved-pass')
export class SavedPassController {
  constructor(private serv: SavedPassService, private usersService: UsersService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  public async post(@Body() dto: SavedPassInterface, @Param() params, @Headers() headers): Promise<number> {

    Logger.log(headers);

    const user = await this.usersService.findOne(params.id)

    return this.serv.createPass(dto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async get(@Param() params): Promise<SavedPass[]> {
    return this.serv.getAllPass(params.id);
  }
}
