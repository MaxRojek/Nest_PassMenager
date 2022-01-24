import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SavedPass } from '../model/saved-pass.entity';
import { Repository } from 'typeorm';
import { SavedPassInterface } from 'src/types/SavedPassInterface';
import { User } from '../model/user.entity';

@Injectable()
export class SavedPassService {
  constructor(@InjectRepository(SavedPass) private readonly repo: Repository<SavedPass>) { }

  public async createPass(dto: SavedPassInterface, user: User): Promise<number> {

    const savePass = {
      domain: dto.domain,
      login: dto.login,
      password: dto.password,
      owner: user
    }
    const res = await this.repo.save(savePass);
    return res.id
  }

  public async getAllPass(id: number): Promise<SavedPass[]> {
    return await this.repo.find({ where: { owner: id } });
  }
}
