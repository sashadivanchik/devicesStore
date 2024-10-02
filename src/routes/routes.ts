import { Admin } from "../pages/Admin/Admin";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE
} from "../pages/utils/paths";
import { Basket } from "../pages/Basket/Basket";
import { Shop } from "../pages/Shop/Shop";
import { Device } from "../pages/Device/Device";
import { Auth } from "../pages/Auth/Auth";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  }
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: `${DEVICE_ROUTE}/:id`,
    Component: Device
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  }
];
