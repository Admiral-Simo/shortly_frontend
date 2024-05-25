import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useAddUrl = () => {
  const queryClient = useQueryClient();

  const createUrl = (newUrl: string) => {
    return axios.post(
      "http://192.168.1.13:8080/save",
      { url: newUrl },
      {
        withCredentials: true, // Include credentials in the request
      },
    );
  };

  const mutation = useMutation(createUrl, {
    onSuccess: () => {
      queryClient.invalidateQueries("Url");
    },
  });

  const addUrl = async (newUrl: string) => {
    await mutation.mutateAsync(newUrl);
  };

  return addUrl;
};

export default useAddUrl;
