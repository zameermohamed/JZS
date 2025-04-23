export interface userProfile {
  username: string;
  bio: string;
  profilePic: string;
  mostRecentStay: PropertyAttributes;
}

export interface PropertyAttributes {
  _id: string;
  img: string;
  name: string;
  likes: string[];
}
