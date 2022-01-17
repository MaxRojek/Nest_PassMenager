import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SavedPass } from '../model/saved-pass.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SavedPassService {
  constructor(@InjectRepository(SavedPass) private readonly repo: Repository<SavedPass>) { }

  public async createPass(dto: SavedPass): Promise<SavedPass> {
    return this.repo.save(dto);
  }

  public async getAllPass(id: number): Promise<SavedPass[]> {
    return await this.repo.find({ where: { owner: id } });
  }
}
