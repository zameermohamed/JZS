import mongoose, { CallbackError, Document } from "mongoose";
import { Listing } from "./listing.js"
import bcrypt from "bcryptjs";

export interface User extends Document {
    username: string;
    bio: string;
    mostRecentStay: Listing;
    profilePic: string;
    password: string;
}

const UserSchema = new mongoose.Schema<User>({
    username: {type: String, required: true},
    bio: {type: String, required: false},
    mostRecentStay: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: false},
    profilePic: {type: String, required: true},
    password: {type: String, required: true}
})

// Hash password
UserSchema.pre("save", async function (next) {
    try {
      // If password is modified, hash it
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
    } catch (error) {
    next(error as CallbackError);
    }
});

  // Compare password
UserSchema.methods.comparePassword = async function (usersPassword: string) {
    return bcrypt.compare(usersPassword, this.password);
};  

export const UserModel = mongoose.model<User>("User", UserSchema);



