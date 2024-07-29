import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import React, { FC, memo } from "react";

import MenuIconButton from "../../atoms/buttons/MenuIconButton";
import MenuDrawer from "../../molecules/MenuDrawer";

const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
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
            <Link>Users</Link>
          </Box>
          <Link>Setting</Link>
        </Flex>

        <MenuIconButton onOpen={onOpen}></MenuIconButton>
      </Flex>

      <MenuDrawer onClose={onClose} isOpen={isOpen}></MenuDrawer>
    </>
  );
});

export default Header;
