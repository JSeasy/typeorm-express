import { UserController } from "./controller/UserController";
import { HouseController } from "./controller/HouseController";
import { MenuController } from "./controller/MenuController";

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
  // house
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

  //menu
  {
    method: "get",
    route: "/menus",
    controller: MenuController,
    action: "all",
  },
  {
    method: "get",
    route: "/menus/:id",
    controller: MenuController,
    action: "one",
  },
  {
    method: "post",
    route: "/menus",
    controller: MenuController,
    action: "save",
  },
  {
    method: "delete",
    route: "/menus/:id",
    controller: MenuController,
    action: "remove",
  },
  {
    method: "get",
    route: "/getTreeMenu",
    controller: MenuController,
    action: "getTree",
  },
];
