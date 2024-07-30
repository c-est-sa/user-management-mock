import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import MenuIconButton from "../../atoms/buttons/MenuIconButton";
import MenuDrawer from "../../molecules/MenuDrawer";

const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/home"), [navigate]);
  const onClickUserManagement = useCallback(
    () => navigate("/home/user-management"),
    [navigate]
  );
  const onClickSetting = useCallback(
    () => navigate("/home/setting"),
    [navigate]
  );

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            User Management App
          </Heading>
        </Flex>

        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>Users</Link>
          </Box>
          <Link onClick={onClickSetting}>Setting</Link>
        </Flex>

        <MenuIconButton onOpen={onOpen}></MenuIconButton>
      </Flex>

      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      ></MenuDrawer>
    </>
  );
});

export default Header;
