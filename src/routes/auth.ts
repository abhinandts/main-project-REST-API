import express, { Router } from "express";
import { validateRegisterMiddleware } from "../middleware/validateRegister.js";
import { UserRepository } from "../repositories/user.js";
import { AuthService } from "../services/auth.js";
import { AuthController } from "../controllers/auth.js";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const authRouter: Router = express.Router();

authRouter.post(
  "/",
  validateRegisterMiddleware,
  authController.register.bind(authController)
);

export default authRouter;
