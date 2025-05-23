import { Request, Response, Router } from "express";
import { getCurrentUser } from "../controllers/users.js";
import {
  getAllListings,
  updateListingLikes,
  updateListingUser,
} from "../controllers/listings.js";
import { hardCodedId, TokenMiddleware } from "../controllers/middle.js";
import { createToken } from "../controllers/authentication.js";

const bnbRouter: Router = Router();

bnbRouter.get("/me", hardCodedId, getCurrentUser);
bnbRouter.get("/listings", getAllListings);
bnbRouter.put("/listings/like/:listingId", hardCodedId, updateListingLikes);
bnbRouter.put("/listings/:userId", updateListingUser);
bnbRouter.post("/token", createToken);
bnbRouter.get("/verify1", TokenMiddleware, getCurrentUser)
bnbRouter.put("/verify2/:listingId", TokenMiddleware, updateListingLikes)

export default bnbRouter;
