export interface userProfile {
  username: string;
  bio: string;
  mostRecentStay: PropertyAttributes;
}

export interface PropertyAttributes {
  image: string;
  name: string;
  id?: number;
}
