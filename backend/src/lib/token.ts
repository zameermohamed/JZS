import JWT from "jsonwebtoken";
import { DatabaseError } from "../types/errorTypes.js";

const secret: string = process.env.JWT_SECRET ||"";

export function generateToken(user_id: string) {
    return JWT.sign(
      {
        user_id: user_id,
        iat: Math.floor(Date.now() / 1000),
  
        // Set the JWT token to expire in 10 minutes
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      secret
    );
  }
  
  export function decodeToken(token: string) {
    return JWT.decode(token);
  }

  export function verifyToken(token: string) {
    try {
      return JWT.verify(token, secret);
    } catch (error) {
      // Handle invalid or expired token error
      throw new DatabaseError("Invalid or expired token", 401);
    }
  }
  

  
