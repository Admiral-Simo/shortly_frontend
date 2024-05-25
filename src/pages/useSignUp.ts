import { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import type { User } from "../types";
import { useNavigate } from "react-router-dom";

interface SignInData {
  username: string;
  password: string;
}

interface SignUpResponse {
  user: User;
}

const useSignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const signinMutation = useMutation<SignUpResponse, unknown, SignInData>(
    async (formData) => {
      const response = await axios.post<SignUpResponse>(
        "http://192.168.1.13:8080/signup",
        formData,
        {
          withCredentials: true,
        },
      );

      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log(data?.user);
        navigate("/", { replace: true });
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

export default useSignUp;
