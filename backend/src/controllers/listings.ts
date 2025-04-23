import { Request, Response, NextFunction } from "express";
import { ListingModel, Listing } from "../models/listing.js";
import {
  ListingDocumentResponse,
  SingleListingResponse,
} from "../types/responsesTypes.js";
import { DatabaseError } from "../types/errorTypes.js";
import {
  ListingIdParams,
  listingReqBody,
  UserIdParams,
  UserReqBody,
} from "../types/paramsTypes.js";
import mongoose from "mongoose";
import { UserModel } from "../models/user.js";

const getAllListings = async (
  req: Request<{}, {}, {}, {}>,
  res: Response<ListingDocumentResponse>,
  next: NextFunction
) => {
  try {
    const listings: Listing[] | null = await ListingModel.find();

    if (!listings) {
      throw new DatabaseError("No listings found!", 404);
    }

    res.status(200).json({ listings: listings });
  } catch (error) {
    next(error);
  }
};

const updateListingUser = async (
  req: Request<UserIdParams, {}, listingReqBody, {}>,
  res: Response<SingleListingResponse>,
  next: NextFunction
) => {
  try {
    const userId: string = String(req.params.userId);
    const listingId: string = String(req.body.listing);

    if (!mongoose.Types.ObjectId.isValid(listingId)) {
      throw new DatabaseError("Invalid listing ID format", 400);
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new DatabaseError("Invalid user ID format", 400);
    }

    // Find the listing in a single query
    const listing = await ListingModel.findOne({ _id: listingId });
    // Handle not found case
    if (!listing) {
      throw new DatabaseError("No listing with that ID", 404);
    }

    // Check ownership
    if (listing.owner.toString() === userId) {
      throw new DatabaseError("You already own this property!", 400);
    }

    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      throw new DatabaseError("No user with that ID", 404);
    }

    // Update the listing
    const updatedListing = await ListingModel.findByIdAndUpdate(
      listingId,
      { owner: userId },
      { new: true } // Return the updated document
    );

    // Send response with 200 status since we're including a body
    res.status(200).json({ listing: updatedListing });
  } catch (error) {
    next(error);
  }
};

const updateListingLikes = async (
  req: Request<ListingIdParams, {}, UserReqBody, {}>,
  res: Response<ListingDocumentResponse>,
  next: NextFunction
) => {
  try {
    const listingId: string = String(req.params.listingId);
    const userId: string = String(req.body.id);

    if (!mongoose.Types.ObjectId.isValid(listingId)) {
      throw new DatabaseError("Invalid listing ID format", 400);
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new DatabaseError("Invalid user ID format", 400);
    }

    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      throw new DatabaseError("No user with that ID", 404);
    }
    const listing = await ListingModel.findById(listingId);

    if (!listing) {
      throw new DatabaseError("No listing with that ID", 404);
    }
    if (listing) {
      const hasLiked = listing.likes.some((id) => id.toString() === userId);
      const update = hasLiked
        ? { $pull: { likes: userId } }
        : { $addToSet: { likes: userId } };
      await ListingModel.findByIdAndUpdate(listingId, update, { new: true });
      const listings: Listing[] | null = await ListingModel.find();
      res.status(200).json({ listings: listings });
    }
  } catch (error) {
    next(error);
  }
};

export { getAllListings, updateListingUser, updateListingLikes };
