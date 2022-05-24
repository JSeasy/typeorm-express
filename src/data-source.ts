import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { House } from "./entity/House";
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "118.31.188.117",
  port: 3306,
  username: "root",
  password: "123123",
  database: "test",
  synchronize: true,
  charset: "utf8",
  logging: false,
  entities: [User, House],
  migrations: [],
  subscribers: [],
});
