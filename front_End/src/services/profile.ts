import { userProfile } from "../components/types";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const getCurrentUser = async () => {
    const requestOptions = {
        method: "GET",
    }
    const response = await fetch(`${BACKEND_URL}/me`, requestOptions);
    if (response.status !== 200) {
        throw new Error("Unable to fetch user");
    }
    const data = await response.json();
    return data;
    };

    export const fetchUser = async (
      setUser: React.Dispatch<React.SetStateAction<userProfile>>
    ) => {
      const data = await getCurrentUser();
      setUser(data.user);
    };
