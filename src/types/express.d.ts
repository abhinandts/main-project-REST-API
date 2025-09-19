import { RegisterDTO } from "../dtos/auth.dto.js";

declare module "express-serve-static-core" {
  interface Request {
    validatedBody?: RegisterDTO;
  }
}
