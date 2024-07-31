import React, { ChangeEvent, FC, memo, useEffect, useState } from "react";
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
  ModalFooter,
} from "@chakra-ui/react";
import ButtonPrimary from "../../atoms/buttons/ButtonPrimary";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  userObj: {
    name: string;
    fullName: string;
    email: string;
    tel: string;
  };
  isAdmin?: boolean;
};

const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, userObj, isAdmin } = props;

  const [updatedUser, setUpdatedUser] = useState<Props["userObj"]>(
    {} as Props["userObj"]
  );

  useEffect(() => {
    setUpdatedUser(userObj);
  }, [userObj]);

  const onClickUpdate = () => {
    alert("updated");
    onClose();
  };

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
              <Input
                value={updatedUser.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUpdatedUser({ ...updatedUser, name: e.target.value })
                }
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                value={updatedUser.fullName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUpdatedUser({ ...updatedUser, fullName: e.target.value })
                }
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                value={updatedUser.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUpdatedUser({ ...updatedUser, email: e.target.value })
                }
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Tel</FormLabel>
              <Input
                value={updatedUser.tel}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUpdatedUser({ ...updatedUser, tel: e.target.value })
                }
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
          </Stack>
        </ModalBody>

        {isAdmin && (
          <ModalFooter>
            <ButtonPrimary onClick={onClickUpdate}>Save edit</ButtonPrimary>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});

export default UserDetailModal;
