import LikeButton from "./LikeButton";
import { useState } from "react";
import { PropertyAttributes } from "./types";

const PropertyTile = ({ _id, img, name, likes }: PropertyAttributes) => {
  const [liked, setLiked] = useState<boolean>(false);
  const numOfLikes = likes?.length;
  return (
    <div className="property-tile">
      <img className="property-img" src={img}></img>
      <p>{name}</p>
      <p>Number of likes: {numOfLikes}</p>
      <LikeButton liked={liked} setLiked={setLiked} id={_id} likes={likes} />
    </div>
  );
};

export default PropertyTile;
