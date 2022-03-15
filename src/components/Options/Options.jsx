import React, { useState } from "react";
import range from "../../modules/range";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
          <DrawerCloseButton />
          <DrawerHeader>Options</DrawerHeader>

          <DrawerBody>
            <FormControl isInvalid={props.isInError}>
              <FormLabel>Minimum Value</FormLabel>
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
              <FormLabel>Maximum Value</FormLabel>
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
              {!props.isInError ? (
                <FormHelperText>Enter a valid range of numbers.</FormHelperText>
              ) : (
                <FormErrorMessage>
                  The current range is invalid.
                </FormErrorMessage>
              )}
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="red" mr={3} onClick={props.handleReset}>
              Reset
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleOnClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
