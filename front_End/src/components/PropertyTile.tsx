import LikeButton from "./LikeButton";
import { useState } from "react";
import { PropertyAttributes } from "./types";

const PropertyTile = ({ image, name }: PropertyAttributes) => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="property-tile">
      <img className="property-img" src={image}></img>
      <p>{name}</p>
      <LikeButton liked={liked} setLiked={setLiked} />
    </div>
  );
};

export default PropertyTile;
