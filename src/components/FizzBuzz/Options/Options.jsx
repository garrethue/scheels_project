import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
  FormErrorMessage,
  useDisclosure,
  IconButton,
  Input,
  Divider,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

export default function Options(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleOnClose = () => {
    if (props.min > props.max) {
      props.setIsInError(true);
      return;
    }
    onClose();
  };

  return (
    <>
      <IconButton
        icon={<SettingsIcon />}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      ></IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={handleOnClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Options</DrawerHeader>

          <DrawerBody>
            <FormControl isInvalid={props.isInError}>
              {!props.isInError ? (
                <FormHelperText>Enter a valid range of numbers.</FormHelperText>
              ) : (
                <FormErrorMessage>
                  The current range is invalid.
                </FormErrorMessage>
              )}
              <FormLabel mt={2}>Minimum Value</FormLabel>
              <NumberInput
                min={1}
                onChange={(e) => props.handleChange(e, "min")}
                value={props.min}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormLabel mt={2}>Maximum Value</FormLabel>
              <NumberInput
                onChange={(e) => props.handleChange(e, "max")}
                min={props.min}
                value={props.max}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Button colorScheme="red" mt={3} mr={3} onClick={props.handleReset}>
              Reset
            </Button>
            <Divider m={3} />
            <FormControl>
              {!false ? (
                <FormHelperText>Enter a valid domain name.</FormHelperText>
              ) : (
                <FormErrorMessage>
                  The current domain name is invalid.
                </FormErrorMessage>
              )}
              <FormLabel mt={2}>Name</FormLabel>
              <Input placeholder="SCHEELS" />
              <FormLabel mt={2}>Top-Level Domain</FormLabel>
              <Input placeholder=".COM" />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={handleOnClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
