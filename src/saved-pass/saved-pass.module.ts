import { Module } from '@nestjs/common';
import { SavedPassService } from './saved-pass.service';
import { SavedPassController } from './saved-pass.controller';
import { SavedPass } from '../model/saved-pass.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SavedPass])],
  providers: [SavedPassService],
  controllers: [SavedPassController]
})
export class SavedPassModule { }
