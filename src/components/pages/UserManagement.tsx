import {
  Box,
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC, memo, useCallback, useEffect, useRef } from "react";

import UserCard from "../organisms/user/UserCard";
import useAllUsers from "../../hooks/useAllUsers";
import UserDetailModal from "../organisms/user/UserDetailModal";

const UserManagement: FC = memo(() => {
  const { getAllUsers, isLoading, users } = useAllUsers();
  const isInirialMount = useRef(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isInirialMount.current) {
      isInirialMount.current = false;
      (async () => getAllUsers())();
    }
  }, [getAllUsers]);

  const onClickUser = useCallback(() => onOpen(), [onOpen]);

  return (
    <>
      {isLoading ? (
        <Center h="100vh">
          <Spinner></Spinner>
        </Center>
      ) : (
        <Box maxWidth="1200px" margin="0 auto">
          <Wrap p={{ base: 4, md: 10 }} justify="center">
            {users.map((user) => (
              <WrapItem key={user.id}>
                <UserCard
                  imageUrl={`https://picsum.photos/200?random=${user.id}`}
                  name={user.username}
                  fullname={user.name}
                  onClick={onClickUser}
                ></UserCard>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}

      <UserDetailModal isOpen={isOpen} onClose={onClose}></UserDetailModal>
    </>
  );
});

export default UserManagement;
