import React, { FC, memo } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">Top</Button>
            <Button w="100%">Users</Button>
            <Button w="100%">Setting</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default MenuDrawer;
