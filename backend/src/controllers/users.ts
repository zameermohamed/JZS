import { Request, Response, NextFunction } from "express";
import { UserModel, User } from "../models/user.js";
import { UserDocumentResponse } from "../types/responsesTypes.js";
import { UserReqBody } from "../types/paramsTypes.js";
import { DatabaseError } from "../types/errorTypes.js";

const getCurrentUser = async (
  req: Request<{}, {}, UserReqBody, {}>,
  res: Response<UserDocumentResponse>,
  next: NextFunction
) => {
  try {
    const userId: string = String(req.body.id);

    const userDoc: User | null = await UserModel.findOne({
      _id: userId,
    }).populate("mostRecentStay");

    if (!userDoc) {
      throw new DatabaseError("Could not find the correct document", 404);
    }

    res.status(200).json({ user: userDoc });
  } catch (error) {
    next(error);
  }
};

export { getCurrentUser };
