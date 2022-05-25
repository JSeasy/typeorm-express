import {
  Entity,
  Tree,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  TreeParent,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import BaseEntity from "./BaseEntity";

@Entity()
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  componentName: string;

  @Column()
  menuName: string;

  @Column()
  parentId: number;
}
