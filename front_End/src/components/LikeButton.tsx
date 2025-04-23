import { updateLikes } from "../services/listings";

type LikedProps = {
  liked: boolean;
  id: string;
  likes: string[];
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
};

const LikeButton = ({ liked, setLiked, id, likes }: LikedProps) => {
  const userId = import.meta.env.VITE_USER_ID;
  if (likes.includes(userId)) {
    liked = true;
  }
  const handleClickLikeButton = () => {
    updateLikes(id);
    liked ? setLiked(false) : setLiked(true);
  };

  return liked ? (
    <button className="liked-property" onClick={handleClickLikeButton}>
      ❤️
    </button>
  ) : (
    <button className="" onClick={handleClickLikeButton}>
      🤍
    </button>
  );
};

export default LikeButton;
