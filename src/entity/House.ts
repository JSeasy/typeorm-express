import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

import { User } from "./User";

@Entity()
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  floor: number;

  @Column()
  communityName: string;

  @Column()
  compleYear: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;

  @ManyToOne((type) => User, {})
  @JoinColumn()
  user: Promise<User>;
}
