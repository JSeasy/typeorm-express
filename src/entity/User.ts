import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import BaseEntity from "./BaseEntity";
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column({
    default: 0,
  })
  age: number;

  @Column({
    default: "",
  })
  city: string;

  @Column({
    default: "",
  })
  school: string;

  @Column()
  password: string;
}
