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
} from "@chakra-ui/react";

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [currentRange, setCurrentRange] = useState([]);
  const [isInError, setIsInError] = useState(false);

  const handleChange = (number, callingComponent) => {
    //TODO: handle validation for nonnumeric characters
    if (!number) {
      console.log("in !number");
      return;
    }
    number = Number(number);
    console.log(typeof number, callingComponent);
    if (callingComponent === "min") {
      setMin(number);
      return;
    }
    setMax(number);
  };

  const handleRun = (event) => {
    event.preventDefault();
    console.log(min, max);
    if (min > max) {
      setIsInError(true);
      return;
    }
    setCurrentRange([...range(min, max)]);
    setIsInError(false);
    return;
  };

  const handleReset = (event) => {
    setMin(1);
    setMax(100);
    setCurrentRange([]);
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Options
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>FizzBuzz Options</DrawerHeader>

          <DrawerBody>
            <FormControl isInvalid={isInError}>
              <FormLabel>Minimum Value</FormLabel>
              <NumberInput
                min={1}
                onChange={(e) => handleChange(e, "min")}
                value={min}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormLabel>Maximum Value</FormLabel>
              <NumberInput
                onChange={(e) => handleChange(e, "max")}
                min={min}
                value={max}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {!isInError ? (
                <FormHelperText>Enter a valid range of numbers.</FormHelperText>
              ) : (
                <FormErrorMessage>
                  The current range is invalid.
                </FormErrorMessage>
              )}
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
