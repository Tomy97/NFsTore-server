import { Router } from "express";
import {
  getUsersController,
  postUsersController
} from "../Controllers/user.controller";
import { registerUser, loginUser } from "../Controllers/auth.controller";

const router = Router();

router.get("/users", getUsersController);
router.post("/users/register", registerUser);
router.post("/users/login", loginUser);

export default router;
