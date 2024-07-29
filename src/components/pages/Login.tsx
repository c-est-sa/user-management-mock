import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { FC, memo } from "react";

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
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
            Log in
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});

export default Login;
