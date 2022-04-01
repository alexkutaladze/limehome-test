import axios from "axios";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "./queries.constants";
import { ISingleListingResult } from "./queries.types";

const getSingleListing = async (id: number) => {
  const { data } = await axios.get(
    `https://api.limehome.com/properties/v1/public/properties/${id}`
  );
  return data;
};

const useSingleListing = (id: number) => {
  return useQuery<ISingleListingResult>(QUERY_KEYS.LISTING_SINGLE(id), () =>
    getSingleListing(id)
  );
};

export default useSingleListing;
