export interface ExampleParams {
  id: string;
}

export interface ExampleReqBody {
  firstProperty: string;
  secondProperty: string;
  thirdProperty: string;
}

export interface UserReqBody {
  id: string;
}

export interface TokenReqBody {
  id?: string;
}

export interface UserIdParams {
  userId: string;
}

export interface listingReqBody {
  listing: string;
}

export interface ListingIdParams {
  listingId: string;
}

export interface authenticationBody {
  username: string;
  password: string;
}
