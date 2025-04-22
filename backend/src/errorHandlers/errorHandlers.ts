import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { DatabaseError, reqError } from "../types/errorTypes.js";

const globalErrorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (res.headersSent) {
    return next(err);
  }
  if (err instanceof DatabaseError) {
    res.status(err.statusCode).json({ error: err.message });
    return next(err);
  }

  if (err instanceof reqError) {
    res.status(err.statusCode).json({ error: err.message });
    return next(err);
  }

  res.status(500).json({ error: "Something went wrong" });
};

export { globalErrorHandler };
