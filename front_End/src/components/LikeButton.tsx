import { updateLikes } from "../services/listings";
import { useState, useEffect } from "react";

type LikedProps = {
  id: string;
  likes: string[];
  trigger: number;
  setTrigger: React.Dispatch<React.SetStateAction<number>>;
};

const LikeButton = ({ id, likes = [], trigger, setTrigger }: LikedProps) => {
  const userId = import.meta.env.VITE_USER_ID;
  const [liked, setLiked] = useState<boolean>(likes.includes(userId));
  useEffect(() => {
    setLiked(likes.includes(userId));
  }, [likes]);

  const handleClickLikeButton = async () => {
    await updateLikes(id);
    setTrigger(trigger + 1);
  };

  return (
    <button
      className={liked ? "liked-property" : ""}
      onClick={handleClickLikeButton}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
};

export default LikeButton;
