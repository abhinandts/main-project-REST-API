import { NextFunction, Request, Response } from "express";
import { getErrorMessage } from "../utils.js";
import CustomError from "../errors/CustomError.js";

export default function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    next(error);
    return;
  }

  if (error instanceof CustomError) {
    res
      .status(error.statusCode)
      .json({ error: { message: error.message, code: error.code } });
    return;
  }

  // for debugging
  // res.status(500).json({
  //   message: error instanceof Error ? error.stack : undefined,
  // });
  // return;

  res.status(500).json({
    message:
      getErrorMessage(error) || "error occured: from error-handler middleware",
  });
}
