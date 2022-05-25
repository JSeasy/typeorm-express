import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Menu } from "../entity/Menu";
import { arrToTree } from "../utils";
export class MenuController {
  private resitory = AppDataSource.getRepository(Menu);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.resitory.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.resitory.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.resitory.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let target = await this.resitory.findOneBy({
      id: request.params.id,
    });
    target.deleteDate = new Date();
    return this.resitory.save(target);
  }
  async getTree(request: Request, response: Response, next: NextFunction) {
    const result = await this.all(request, response, next);
    return arrToTree(result);
  }
}
