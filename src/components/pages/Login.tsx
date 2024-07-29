import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import React, { FC, memo } from "react";

import ButtonPrimary from "../atoms/buttons/ButtonPrimary";

const Login: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User Management App
        </Heading>

        <Divider my={4}></Divider>

        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="user ID"></Input>
          <ButtonPrimary>Log in</ButtonPrimary>
        </Stack>
      </Box>
    </Flex>
  );
});

export default Login;
