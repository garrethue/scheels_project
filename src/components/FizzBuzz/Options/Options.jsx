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
    //extend the onClose method provided by Chakra UI
    if (
      props.parameters.min > props.parameters.max ||
      props.parameters.domainName === "" ||
      props.parameters.topLevelDomain === ""
    ) {
      props.parameters.setIsInError(true);
      return;
    }

    props.parameters.setIsInError(false);
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
            <FormControl isInvalid={props.parameters.isInError}>
              {!props.parameters.isInError ? (
                <FormHelperText>
                  Enter a valid range of numbers and domain name.
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  The current range or domain name is invalid.
                </FormErrorMessage>
              )}
              <FormLabel mt={2}>Minimum Value</FormLabel>
              <NumberInput
                min={1}
                onChange={(e) => props.parameters.handleChange(e, "min")}
                value={props.parameters.min}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormLabel mt={2}>Maximum Value</FormLabel>
              <NumberInput
                onChange={(e) => props.parameters.handleChange(e, "max")}
                min={props.parameters.min}
                value={props.parameters.max}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                colorScheme="red"
                mt={3}
                mr={3}
                onClick={(e) =>
                  props.parameters.handleParameterReset(e, "numberRangeReset")
                }
              >
                Reset
              </Button>
              <Divider m={3} />
              <FormLabel mt={2}>Domain Name</FormLabel>
              <Input
                type="text"
                placeholder="SCHEELS"
                value={props.parameters.domainName}
                onChange={(e) => props.parameters.handleChange(e, "domainName")}
              />
              <FormLabel mt={2}>Top-Level Domain</FormLabel>
              <Input
                type="text"
                placeholder=".COM"
                value={props.parameters.topLevelDomain}
                onChange={(e) =>
                  props.parameters.handleChange(e, "topLevelDomain")
                }
              />
              <Button
                colorScheme="red"
                mt={3}
                mr={3}
                onClick={(e) =>
                  props.parameters.handleParameterReset(e, "domainReset")
                }
              >
                Reset
              </Button>
            </FormControl>
          </DrawerBody>

          <DrawerFooter justifyContent="left">
            <Button colorScheme="blue" mr={3} onClick={handleOnClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
