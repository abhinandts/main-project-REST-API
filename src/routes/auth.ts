import express, { Router } from "express";
import { validateRegisterMiddleware } from "../middleware/validateRegister.js";
import { register } from "../controllers/auth.js";

const auth: Router = express.Router();

auth.post("/", validateRegisterMiddleware, register);

export default auth;
