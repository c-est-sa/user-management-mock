import React, { FC, memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type Props = {
  onOpen: () => void;
};

const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;

  return (
    <IconButton
      aria-label="menu button"
      icon={<HamburgerIcon></HamburgerIcon>}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    ></IconButton>
  );
});

export default MenuIconButton;
