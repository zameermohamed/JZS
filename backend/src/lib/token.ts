import JWT from "jsonwebtoken";
import { DatabaseError } from "../types/errorTypes.js";
import mongoose from "mongoose";

export function generateToken(user_id: mongoose.Schema.Types.ObjectId) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new DatabaseError("No secret", 500);
  }

  const token = JWT.sign(
    {
      user_id: user_id,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    secret
  );

  if (!token) {
    throw new DatabaseError("Token generation failed", 500);
  }

  return token;
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
