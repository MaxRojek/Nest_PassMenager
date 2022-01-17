import { Body, Controller, Get, Post } from '@nestjs/common';
import { SavedPass } from '../model/saved-pass.entity';
import { SavedPassService } from './saved-pass.service';

@Controller('saved-pass')
export class SavedPassController {
  constructor(private serv: SavedPassService) { }


  @Post()
  public async post(@Body() dto: SavedPass): Promise<SavedPass> {
    return this.serv.createPass(dto);
  }

  @Get()
  public async get(@Body() id: number): Promise<SavedPass[]> {
    return this.serv.getAllPass(id);
  }
}
