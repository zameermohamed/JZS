import JWT from "jsonwebtoken";
import { DatabaseError } from "../types/errorTypes.js";
import mongoose from "mongoose";
import { NextFunction } from "express";

export function generateToken(
  user_id: mongoose.Schema.Types.ObjectId,
  next: NextFunction
) {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new DatabaseError("No secret", 404);
    }
    const temptoken = JWT.sign(
      {
        user_id: user_id,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      secret
    );
    if (temptoken === undefined) {
      throw new DatabaseError("No token", 404);
    }

    return temptoken;
  } catch (error) {
    next(error);
  }
}

export function decodeToken(token: string) {
  return JWT.decode(token);
}

export function verifyToken(token: string) {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new DatabaseError("No secret", 401);
    }
    return JWT.verify(token, secret);
  } catch (error) {
    // Handle invalid or expired token error
    throw new DatabaseError("Invalid or expired token", 401);
  }
}
