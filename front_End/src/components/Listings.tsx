import PropertyTile from "./PropertyTile";
import { PropertyAttributes } from "./types";
import { useState } from "react";
import { useEffect } from "react";

const Listings = () => {
  const [listings, setListings] = useState<PropertyAttributes[]>([]);

  useEffect(() => {
    setListings([
      {
        image:
          "https://media.vrbo.com/lodging/28000000/27320000/27314000/27313935/e7c3076b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        name: "Beach House",
        id: 1,
      },
      {
        image:
          "https://images.stockcake.com/public/3/c/4/3c4fdcfb-31ec-4fa8-b0fe-a01b858e333d_large/tropical-beach-house-stockcake.jpg",
        name: "Tropical Beach House",
        id: 2,
      },
      {
        image:
          "https://www.top-barcelona-apartments.com/wp-content/uploads/2023/07/IMG_5354-scaled.jpg",
        name: "Barcelona Flat",
        id: 3,
      },
    ]);
  }, []);

  return (
    <div id="listings">
      {listings.map((listing) => {
        return (
          <PropertyTile
            key={listing.id}
            image={listing.image}
            name={listing.name}
          />
        );
      })}
    </div>
  );
};

export default Listings;
