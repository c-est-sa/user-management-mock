import React, { FC, memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  name: string;
  fullname: string;
  onClick: () => void;
};

const UserCard: FC<Props> = memo((props) => {
  const { imageUrl, name, fullname, onClick } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={name}
          m="auto"
        ></Image>
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullname}
        </Text>
      </Stack>
    </Box>
  );
});

export default UserCard;
