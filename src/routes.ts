import { UserController } from "./controller/UserController";
import { HouseController } from "./controller/HouseController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "get",
    route: "/houses",
    controller: HouseController,
    action: "all",
  },
  {
    method: "get",
    route: "/houses/:id",
    controller: HouseController,
    action: "one",
  },
  {
    method: "post",
    route: "/houses",
    controller: HouseController,
    action: "save",
  },
  {
    method: "delete",
    route: "/houses/:id",
    controller: HouseController,
    action: "remove",
  },
];
