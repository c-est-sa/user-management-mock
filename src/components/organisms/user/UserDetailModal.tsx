import React, { FC, memo } from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  userObj: {
    name: string;
    fullName: string;
    email: string;
    tel: string;
  };
};

const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, userObj } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay></ModalOverlay>
      <ModalContent p={4} pb={6}>
        <ModalHeader>User Details</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={userObj.name} isReadOnly></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input value={userObj.fullName} isReadOnly></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value={userObj.email} isReadOnly></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Tel</FormLabel>
              <Input value={userObj.tel} isReadOnly></Input>
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export default UserDetailModal;
