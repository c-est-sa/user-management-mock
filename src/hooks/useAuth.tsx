import React, { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/user";
import useMessage from "./useMessage";
import useLoginUser from "./useLoginUser";

const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(
    async (id: string) => {
      setIsLoading(true);

      try {
        const res = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (res.data) {
          setLoginUser(res.data);
          showMessage({ title: "successfully logged in", status: "success" });
          navigate("/home");
        } else {
          showMessage({
            title: "failed to log in: no user found",
            status: "error",
          });
        }
      } catch (error) {
        showMessage({
          title: "failed to log in: something went wrong",
          status: "error",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [navigate, showMessage, setLoginUser]
  );
  return { login, isLoading };
};

export default useAuth;
