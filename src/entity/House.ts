import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import BaseEntity from "./BaseEntity";
import { User } from "./User";

@Entity()
export class House extends BaseEntity {
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

  @ManyToOne((type) => User, {
    eager: true,
  })
  @JoinColumn()
  user: User;
}
