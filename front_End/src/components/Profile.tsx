import PropertyTile from "./PropertyTile";
import { useEffect, useState } from "react";
import { userProfile } from "./types";
import { fetchUser_verified } from "../services/profile";

interface ProfileProps {
  trigger: number;
  setTrigger: React.Dispatch<React.SetStateAction<number>>;
}
const Profile: React.FC<ProfileProps> = ({ trigger, setTrigger }) => {
  const [user, setUser] = useState<userProfile>({
    username: "",
    bio: "",
    profilePic: "",
    mostRecentStay: {
      img: "",
      name: "",
      _id: "",
      likes: [],
    },
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      token = "test";
    }
    fetchUser_verified(setUser, token);
  }, [trigger]);

  return (
    <div id="profile">
      <img id="profilePic" src={user.profilePic}></img>
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <h2>My most recent stay:</h2>
      <PropertyTile
        img={user.mostRecentStay.img}
        name={user.mostRecentStay.name}
        _id={user.mostRecentStay._id}
        likes={user.mostRecentStay.likes}
        setTrigger={setTrigger}
        trigger={trigger}
      />
    </div>
  );
};

export default Profile;
