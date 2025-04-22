import { Request, Response, Router } from "express";
import { getCurrentUser } from "../controllers/users.js";
import { getAllListings, updateListingUser } from "../controllers/listings.js";

const bnbRouter: Router = Router();

bnbRouter.get("/me", getCurrentUser);
bnbRouter.get("/listings", getAllListings);
bnbRouter.put("/listings/:userId", updateListingUser);

export default bnbRouter;
