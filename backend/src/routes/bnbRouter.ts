import { Request, Response, Router } from "express";
import { getCurrentUser } from "../controllers/users.js";

const bnbRouter: Router = Router();

bnbRouter.get("/me", getCurrentUser)

export default bnbRouter