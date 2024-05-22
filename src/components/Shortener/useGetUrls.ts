import { useQuery } from "react-query";
import axios from "axios";
import type { Url } from "../../types";

const useGetUrls = () => {
  const { data } = useQuery<Url[]>("Url", async () => {
    const response = await axios.get("http://localhost:8080/get", {
      withCredentials: true, // Include credentials in the request
    });
    return response.data?.urls;
  });

  return data || []; // Return data or an empty array if data is not available yet
};

export default useGetUrls;
