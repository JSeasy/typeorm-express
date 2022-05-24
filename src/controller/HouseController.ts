import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { House } from "../entity/House";
import { User } from "../entity/User";
export class HouseController {
  private houseResitory = AppDataSource.getRepository(House);
  private userResitory = AppDataSource.getRepository(User);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.houseResitory.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.houseResitory.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    // this.userResitory.findOne(request.body.userId).then;
    return new Promise((resolve, reject) => {
      this.userResitory.findOneBy({ id: request.body.userId }).then((res) => {
        if (res) {
          this.houseResitory
            .save({ ...request.body, user: res })
            .then((res) => {
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve("用户不存在");
        }
        //   console.log(res);
      });
    });
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.houseResitory.findOneBy({
      id: request.params.id,
    });
    userToRemove.deleteDate = new Date();
    return this.houseResitory.save(userToRemove);
  }
}
