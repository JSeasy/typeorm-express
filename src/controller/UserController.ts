import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { House } from "../entity/House";
export class UserController {
  private userRepository = AppDataSource.getRepository(User);
  private houseResitory = AppDataSource.getRepository(House);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOneBy({
      id: request.params.id,
    });
    userToRemove.deleteDate = new Date();
    return this.userRepository.save(userToRemove);
  }

  async regist(request: Request, response: Response, next: NextFunction) {
    const { userName } = request.body;
    const found = await this.userRepository.findOne({ where: { userName } });
    if (found) {
      return "用户已注册";
    } else {
      return this.userRepository.save(request.body);
    }
  }
}
