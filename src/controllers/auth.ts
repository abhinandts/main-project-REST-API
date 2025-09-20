import { Request, Response, NextFunction } from "express";
import { IAuthService } from "../services/interfaces/auth.js";

export class AuthController {
  constructor(private authService: IAuthService) {}

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.authService.registerUser(req.validatedBody);

      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }
}
