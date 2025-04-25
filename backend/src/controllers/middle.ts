import { Request, Response, NextFunction } from "express";
import { UserDocumentResponse } from "../types/responsesTypes.js";
import { UserReqBody, TokenReqBody } from "../types/paramsTypes.js";
import { DatabaseError } from "../types/errorTypes.js";
import { verifyToken } from "../lib/token.js";
import { JwtPayload } from "jsonwebtoken";

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

export const TokenMiddleware = async (
  req: Request<{}, {}, TokenReqBody,{}>,
  res: Response<{},{}>,
  next: NextFunction
) => {
  let token: string="";
  const authHeader = req.get("Authorization");
  

  if (authHeader) {
    token = authHeader.slice(7);
  }
  const result = verifyToken(token) as JwtPayload
  if (!result.user_id) {
    throw new DatabaseError("mongoUserId not set in environment", 400);
  }
  req.body.id = result.user_id
next()
}

