import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export default class BaseEntity {
  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;
}
