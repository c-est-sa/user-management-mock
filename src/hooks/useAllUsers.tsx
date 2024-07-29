import React, { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/api/user";
import useMessage from "./useMessage";

const useAllUsers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const { showMessage } = useMessage();

  const getAllUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await axios.get<Array<User>>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (error) {
      showMessage({ title: "failed to get users", status: "error" });
    } finally {
      setIsLoading(false);
    }
  }, [showMessage]);

  return { getAllUsers, isLoading, users };
};

export default useAllUsers;
