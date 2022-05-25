import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import BaseEntity from "./BaseEntity";
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  school: string;
}
