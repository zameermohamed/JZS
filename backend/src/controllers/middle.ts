import { Request, Response, NextFunction } from "express";
import { UserDocumentResponse } from "../types/responsesTypes.js";
import { UserReqBody } from "../types/paramsTypes.js";
import { DatabaseError } from "../types/errorTypes.js";

const hardCodedId = async (
  req: Request<{}, {}, UserReqBody, {}>,
  res: Response<UserDocumentResponse>,
  next: NextFunction
) => {
    const userId = process.env.mongoUserId;

    if (!userId) {
      throw new DatabaseError("mongoUserId not set in environment", 400);
    }
  
    req.body.id = userId;
  next()
  }

export { hardCodedId };


// "68077bdab53267f8ffdf04b5"