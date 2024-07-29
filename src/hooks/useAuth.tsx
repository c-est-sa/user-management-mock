import React, { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/user";

const useAuth = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(
    async (id: string) => {
      setIsLoading(true);

      try {
        const res = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (res.data) {
          navigate("/home");
        } else {
          alert("no user found");
        }
      } catch (error) {
        alert("error");
      } finally {
        setIsLoading(false);
      }
    },
    [navigate]
  );
  return { login, isLoading };
};

export default useAuth;
