import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.js";
import { RegisterRes } from "../dtos/auth.dto.js";

const authService = new AuthService();

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: RegisterRes = await authService.registerUser(
      req.validatedBody
    );
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
