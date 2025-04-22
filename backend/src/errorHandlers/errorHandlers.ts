import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { DatabaseError, reqError } from "../types/errorTypes.js";

const globalErrorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof DatabaseError) {
    res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof reqError) {
    res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: "Something went wrong" });
};

export { globalErrorHandler };
