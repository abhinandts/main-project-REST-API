import { NextFunction, Request, Response } from "express";
import { validateRegisterDTO } from "../validators/authValidator.js";

export function validateRegisterMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    req.validatedBody = validateRegisterDTO(req.body);
    next();
  } catch (err) {
    next(err);
  }
}
