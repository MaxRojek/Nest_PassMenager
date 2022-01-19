import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) { }

  // public async getAll(): Promise<String[]> {
  //   return await this.repo.find()
  //     .then(items => items.map(e => e.name));
  // }

  public async findOne(id: number): Promise<User | undefined> {
    return await this.repo.findOne(id);
  }

  public async create(dto: User): Promise<User> {
    // return this.repo.save(dto);
    const user = User.create(dto);
    await user.save();
    delete user.password;
    return user;
  }

  async findByEmail(email: string) {
    return await this.repo.findOne({
      where: {
        email: email,
      },
    });
  }
}
