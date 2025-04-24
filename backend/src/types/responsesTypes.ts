import { Listing } from "../models/listing.js";
import { User } from "../models/user.js";

export interface OneDocumentResponse<T> {
  document: T;
}

export interface UserDocumentResponse {
  user: User;
}

export interface ListingDocumentResponse {
  listings: Listing[];
}

export interface SingleListingResponse {
  listing: Listing | null;
}

export interface PostResponce<T> {
  msg: String;
  examples: T[];
}

export interface TokenDocumentResponse {
  token: String | undefined;
}
