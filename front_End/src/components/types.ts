export interface userProfile {
  username: string;
  bio: string;
  mostRecentStay: PropertyAttributes;
}

export interface PropertyAttributes {
  img: string;
  name: string;
  id?: number;
}
