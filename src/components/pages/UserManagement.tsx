import { Box, Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import React, { FC, memo, useEffect, useRef } from "react";

import UserCard from "../organisms/user/UserCard";
import useAllUsers from "../../hooks/useAllUsers";

const UserManagement: FC = memo(() => {
  const { getAllUsers, isLoading, users } = useAllUsers();
  const isInirialMount = useRef(true);

  useEffect(() => {
    if (isInirialMount.current) {
      isInirialMount.current = false;
      (async () => getAllUsers())();
    }
  }, [getAllUsers]);

  return (
    <>
      {isLoading ? (
        <Center h="100vh">
          <Spinner></Spinner>
        </Center>
      ) : (
        <Box maxWidth="1200px" margin="0 auto">
          <Wrap p={{ base: 4, md: 10 }} justify="flex-start">
            {users.map((user) => (
              <WrapItem key={user.id}>
                <UserCard
                  imageUrl={`https://picsum.photos/200?random=${user.id}`}
                  name={user.username}
                  fullname={user.name}
                ></UserCard>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </>
  );
});

export default UserManagement;
