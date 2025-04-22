import { Request, Response, NextFunction } from "express";
import { UserModel, User } from "../models/user.js";
import { OneDocumentResponse } from "../types/responsesTypes.js";
import { UserReqBody } from "../types/paramsTypes.js";
import { DatabaseError } from "../types/errorTypes.js";

const getCurrentUser = async (
    req: Request<{}, {}, UserReqBody, {}>,
    res: Response<OneDocumentResponse<User>>,
    next: NextFunction
) => {
    try {
        console.log(req.body.id)

        const userId : string = String(req.body.id);
        console.log(userId)
    
        const userDoc: User | null = await UserModel.findOne({
        _id: userId,
        });
    
        if (!userDoc) {
        throw new DatabaseError("Could not find the correct document", 404);
        }

    
        res.status(200).json({ document: userDoc });
    } catch (error) {
        next(error);
    }
}

export { getCurrentUser }
