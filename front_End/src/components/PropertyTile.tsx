import LikeButton from "./LikeButton";
import { PropertyAttributes } from "./types";

const PropertyTile = ({
  _id,
  img,
  name,
  likes = [],
  trigger,
  setTrigger,
}: PropertyAttributes) => {
  return (
    <div className="property-tile">
      <img className="property-img" src={img}></img>
      <p>{name}</p>
      <p>Number of likes: {likes.length}</p>
      <LikeButton
        id={_id}
        likes={likes}
        trigger={trigger}
        setTrigger={setTrigger}
      />
    </div>
  );
};

export default PropertyTile;
