import { Router } from "express";
import {
  getUsersController,
  postUsersController
} from "../Controllers/user.controller";
import { registerUser } from "../Controllers/auth.controller";

const router = Router();

router.get("/users", getUsersController);
router.post("/users", registerUser);

export default router;
