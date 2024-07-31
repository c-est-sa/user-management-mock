import {
  Box,
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import UserCard from "../organisms/user/UserCard";
import useAllUsers from "../../hooks/useAllUsers";
import UserDetailModal from "../organisms/user/UserDetailModal";
import useLoginUser from "../../hooks/useLoginUser";

const UserManagement: FC = memo(() => {
  const { getAllUsers, isLoading, users } = useAllUsers();
  const isInitialMount = useRef(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [clickedUser, setClickedUser] = useState({
    name: "",
    fullName: "",
    email: "",
    tel: "",
  });

  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      (async () => getAllUsers())();
    }
  }, [getAllUsers]);

  const onClickUser = useCallback(
    (name: string, fullName: string, email: string, tel: string) => {
      setClickedUser({ name, fullName, email, tel });
      onOpen();
    },
    [onOpen]
  );

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
                  onClick={() =>
                    onClickUser(
                      user.username,
                      user.name,
                      user.email,
                      user.phone
                    )
                  }
                ></UserCard>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}

      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        userObj={clickedUser}
      ></UserDetailModal>
    </>
  );
});

export default UserManagement;
