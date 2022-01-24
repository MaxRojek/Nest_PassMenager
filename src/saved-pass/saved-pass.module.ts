import { Module } from '@nestjs/common';
import { SavedPassService } from './saved-pass.service';
import { SavedPassController } from './saved-pass.controller';
import { SavedPass } from '../model/saved-pass.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { JWTUtil } from './jwt-service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([SavedPass]), UsersModule],
  providers: [SavedPassService],
  controllers: [SavedPassController,]
})
export class SavedPassModule { }
