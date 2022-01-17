import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';


@Entity()
export class SavedPass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  domain: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @ManyToOne(() => User, user => user.accounts)
  @JoinColumn()
  owner: User;
}