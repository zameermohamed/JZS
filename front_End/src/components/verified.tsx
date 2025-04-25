import Profile from "./Profile";
import Listings from "./Listings";
import { useState } from "react";

const Verified = () => {
  const [trigger, setTrigger] = useState<number>(0);
  return (
    <div className="App">
      <h1>Makers Bnb</h1>
      <div className="dashboard">
        <Listings trigger={trigger} setTrigger={setTrigger} />
        <Profile trigger={trigger} setTrigger={setTrigger} />
      </div>
    </div>
  );
};

export default Verified;
