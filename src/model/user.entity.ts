import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, BeforeInsert, BaseEntity } from 'typeorm';
import { SavedPass } from './saved-pass.entity';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => SavedPass, savedPass => savedPass.owner)
  accounts: SavedPass[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

}