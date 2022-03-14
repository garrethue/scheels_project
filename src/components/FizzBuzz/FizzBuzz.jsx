import React, { useState } from "react";
import fizzBuzz from "../../modules/fizzbuzz";
import range from "../../modules/range";
import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  Center,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function FizzBuzz() {
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
    <Box>
      <Stack spacing={2}>
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
            <FormErrorMessage>The current range is invalid.</FormErrorMessage>
          )}
        </FormControl>
        <Button onClick={handleRun}>Run</Button>
        <Button onClick={handleReset}>Reset</Button>

        <Box>Min: {min}</Box>
        <Box>Max: {max}</Box>

        <Center>
          <List>
            {currentRange.map((number) => {
              return <ListItem key={number}>{fizzBuzz(number)}</ListItem>;
            })}
          </List>
        </Center>
      </Stack>
    </Box>
  );
}
