import axios from "axios";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "./queries.constants";
import { IListingsResult } from "./queries.types";

const getAllListings = async () => {
  const { data } = await axios.get(
    "https://api.limehome.com/properties/v1/public/properties/?cityId=32&adults=1"
  );
  return data;
};

const useListings = () => {
  return useQuery<IListingsResult>(QUERY_KEYS.LISTINGS, getAllListings);
};

export default useListings;
