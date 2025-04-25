export interface userProfile {
  username: string;
  bio: string;
  profilePic: string;
  mostRecentStay: PropertyAttributesUser;
}

export interface PropertyAttributes {
  _id: string;
  img: string;
  name: string;
  likes: string[];
  trigger: number;
  setTrigger: React.Dispatch<React.SetStateAction<number>>;
}

export interface PropertyAttributesUser {
  _id: string;
  img: string;
  name: string;
  likes: string[];
}

export interface TokenResponse {
  token: string
}
