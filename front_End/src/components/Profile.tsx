import userImg from "../assets/UserImg.webp";
import PropertyTile from "./PropertyTile";
import { useEffect, useState } from "react";
import { userProfile } from "./types";
import { fetchUser } from "../services/profile";

const Profile = () => {
  const [user, setUser] = useState<userProfile>({
    username: "",
    bio: "",
    mostRecentStay: {
      img: "",
      name: "",
      id: 0,
    },
  });

  useEffect(
    () => {
      fetchUser(setUser)
    },[]
  );

  return (
    <div id="profile">
      <img id="profilePic" src={userImg}></img>
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <h2>My most recent stay:</h2>
      <PropertyTile
        img={user.mostRecentStay.img}
        name={user.mostRecentStay.name}
        id={user.mostRecentStay.id}
      />
    </div>
  );
};

export default Profile;
