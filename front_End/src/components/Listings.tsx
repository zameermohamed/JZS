import { fetchListings } from "../services/listings";
import PropertyTile from "./PropertyTile";
import { PropertyAttributes } from "./types";
import { useState } from "react";
import { useEffect } from "react";

interface ListingsProps {
  trigger: number;
  setTrigger: React.Dispatch<React.SetStateAction<number>>;
}

const Listings: React.FC<ListingsProps> = ({ trigger, setTrigger }) => {
  const [listings, setListings] = useState<PropertyAttributes[]>([]);

  useEffect(() => {
    fetchListings(setListings);
  }, [trigger]);

  return (
    <div id="listings">
      {listings.map((listing) => {
        return (
          <PropertyTile
            key={listing._id}
            _id={listing._id}
            img={listing.img}
            name={listing.name}
            likes={listing.likes}
            setTrigger={setTrigger}
            trigger={trigger}
          />
        );
      })}
    </div>
  );
};

export default Listings;
