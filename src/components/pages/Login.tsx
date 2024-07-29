import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import React, { ChangeEvent, FC, memo, useState } from "react";

import ButtonPrimary from "../atoms/buttons/ButtonPrimary";
import useAuth from "../../hooks/useAuth";

const Login: FC = memo(() => {
  const { login, isLoading } = useAuth();

  const [userId, setUserId] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User Management App
        </Heading>

        <Divider my={4}></Divider>

        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="user ID"
            value={userId}
            onChange={onChangeUserId}
          ></Input>
          <ButtonPrimary
            isDisabled={userId === ""}
            isLoading={isLoading}
            onClick={onClickLogin}
          >
            Log in
          </ButtonPrimary>
        </Stack>
      </Box>
    </Flex>
  );
});

export default Login;
