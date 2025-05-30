const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { PropertyAttributes } from "../components/types";

const getAllListings = async () => {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(`${BACKEND_URL}/listings`, requestOptions);
  if (response.status !== 200) {
    throw new Error("Unable to fetch listings");
  }
  const data = await response.json();
  return data;
};

export const fetchListings = async (
  setListings: React.Dispatch<React.SetStateAction<PropertyAttributes[]>>
) => {
  const data = await getAllListings();
  setListings(data.listings);
};

export const updateLikes = async (listingId: string) => {
  const requestOptions = {
    method: "PUT",
  };
  const response = await fetch(
    `${BACKEND_URL}/listings/like/${listingId}`,
    requestOptions
  );
  if (response.status !== 200) {
    throw new Error("Unable to update like listing");
  }
};

export const updateLikes_verified = async (
  listingId: string,
  token: string
) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${BACKEND_URL}/verify2/${listingId}`,
    requestOptions
  );
  if (response.status !== 200) {
    throw new Error("Unable to update like listing");
  }
};
