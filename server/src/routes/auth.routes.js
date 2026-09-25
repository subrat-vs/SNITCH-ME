import { Router } from "express";
import {
  userRegisterController,
  userLoginController,
  tokenRefreshController,
  userGetMeController,
} from "../controllers/auth.controller.js";

const router = Router();

router.get("/register", userRegisterController);

router.get("/login", userLoginController );

router.get("/refresh", tokenRefreshController);

router.get("/me", userGetMeController);

export default router;
