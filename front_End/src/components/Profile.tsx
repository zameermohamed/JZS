import PropertyTile from "./PropertyTile";
import { useEffect, useState } from "react";
import { userProfile } from "./types";
import { fetchUser } from "../services/profile";

const Profile = () => {
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
    fetchUser(setUser);
  }, [user.mostRecentStay.likes]);

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
      />
    </div>
  );
};

export default Profile;
