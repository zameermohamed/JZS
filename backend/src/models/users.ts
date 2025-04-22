import mongoose, { Document } from "mongoose";
import { Listing } from "./listings.js"

interface User extends Document {
    username: string;
    bio: string;
    mostRecentStay: Listing;
    profilePic: string;
}

const UserSchema = new mongoose.Schema<User>({
    username: {type: String, required: true},
    bio: {type: String, required: false},
    mostRecentStay: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: false},
    profilePic: {type: String, required: true}
})

const UserModel = mongoose.model<User>("User", UserSchema);

export { UserModel, User }