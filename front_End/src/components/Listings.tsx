import { fetchListings } from "../services/listings";
import PropertyTile from "./PropertyTile";
import { PropertyAttributes } from "./types";
import { useState } from "react";
import { useEffect } from "react";

const Listings = () => {
  const [listings, setListings] = useState<PropertyAttributes[]>([]);

  useEffect(() => {
    fetchListings(setListings);
  }, []);

  return (
    <div id="listings">
      {listings.map((listing) => {
        return (
          <PropertyTile
            key={listing.id}
            img={listing.img}
            name={listing.name}
          />
        );
      })}
    </div>
  );
};

export default Listings;
