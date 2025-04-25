import { generateToken } from "../lib/token.js";
import { UserModel, User } from "../models/user.js";
import { Request, Response, NextFunction } from "express";
import { TokenDocumentResponse } from "../types/responsesTypes.js";
import { authenticationBody } from "../types/paramsTypes.js";
import { DatabaseError } from "../types/errorTypes.js";

export const createToken = async (
  req: Request<{}, {}, authenticationBody, {}>,
  res: Response<TokenDocumentResponse>,
  next: NextFunction
) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const userDB = await UserModel.findOne({ username: username });
    if (!userDB) {
      throw new DatabaseError("Invalid username", 404);
    }
    const isMatch = await userDB.comparePassword(password);
    if (!isMatch) {
      throw new DatabaseError("Password does not match", 404);
    }
    const token = generateToken(userDB._id);
    res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
};
