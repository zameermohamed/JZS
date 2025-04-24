import Profile from "./Profile";
import Listings from "./Listings";
import { useState } from "react";

const Dashboard = () => {
  const [trigger, setTrigger] = useState<number>(0);
  return (
    <div className="dashboard">
      <Listings trigger={trigger} setTrigger={setTrigger} />
      <Profile trigger={trigger} setTrigger={setTrigger} />
    </div>
  );
};

export default Dashboard;
