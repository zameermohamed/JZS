import { updateLikes, updateLikes_verified } from "../services/listings";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

type LikedProps = {
  id: string;
  likes: string[];
  trigger: number;
  setTrigger: React.Dispatch<React.SetStateAction<number>>;
};

export const LikeButton = ({
  id,
  likes = [],
  trigger,
  setTrigger,
}: LikedProps) => {
  const userId = import.meta.env.VITE_USER_ID;
  console.log(userId);
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

interface TokenPayload {
  user_id: string;
}

export const LikeButton_verified = ({
  id,
  likes = [],
  trigger,
  setTrigger,
}: LikedProps) => {
  let token = localStorage.getItem("token");
  if (!token) {
    token = "test";
  }
  const decoded = jwtDecode<TokenPayload>(token);
  const userId = decoded.user_id;
  const [liked, setLiked] = useState<boolean>(likes.includes(userId));
  useEffect(() => {
    setLiked(likes.includes(userId));
  }, [likes]);

  const handleClickLikeButton = async () => {
    await updateLikes_verified(id, token);
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
