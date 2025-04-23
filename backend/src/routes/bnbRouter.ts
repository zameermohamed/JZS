import { Request, Response, Router } from "express";
import { getCurrentUser } from "../controllers/users.js";
import {
  getAllListings,
  updateListingLikes,
  updateListingUser,
} from "../controllers/listings.js";
import { hardCodedId } from "../controllers/middle.js";

const bnbRouter: Router = Router();

bnbRouter.get("/me", hardCodedId, getCurrentUser);
bnbRouter.get("/listings", getAllListings);
bnbRouter.put("/listings/like/:listingId", updateListingLikes);
bnbRouter.put("/listings/:userId", updateListingUser);

export default bnbRouter;
