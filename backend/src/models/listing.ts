import mongoose, { Document } from "mongoose";
import { User } from "./user.js";

interface Listing extends Document {
  img: string;
  name: string;
  owner: User;
  likes: User[];
}

const ListingSchema = new mongoose.Schema<Listing>({
  img: { type: String, required: true },
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  likes: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ],
});

const ListingModel = mongoose.model<Listing>("Listing", ListingSchema);

export { ListingModel, Listing };
