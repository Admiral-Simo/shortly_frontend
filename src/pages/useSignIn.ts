import { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import type { User } from "../types";

interface SignInData {
  username: string;
  password: string;
}

interface SignInResponse {
  user: User; // Define the type of user object received from the server
  // Add other properties as needed
}

const useSignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signinMutation = useMutation<SignInResponse, unknown, SignInData>(
    async (formData) => {
      const response = await axios.post<SignInResponse>(
        "http://localhost:8080/login",
        formData,
        {
          withCredentials: true, // Ensure cookies are sent with the request
        },
      );

      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log(data?.user);
        // Handle success scenario here, e.g., redirect to dashboard
      },
    },
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    signinMutation.mutate({ username, password });
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
    isLoading: signinMutation.isLoading,
    error: signinMutation.error,
  };
};

export default useSignIn;
