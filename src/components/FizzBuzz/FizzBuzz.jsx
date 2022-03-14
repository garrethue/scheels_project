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

// function* range(min, max) {
//   //use a generator function for performance (ie, not creating a huge array of numbers at one time)
//   for (let i = min; i <= max; i++) {
//     yield i;
//   }
// }

export default function FizzBuzz() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [currentRange, setCurrentRange] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleChange = (number, callingComponent) => {
    //TODO: handle validation for nonnumeric characters
    if (!number) {
      console.log("in !number");
      return;
    }
    if (typeof number !== "number") {
      number = Number(number);
    }
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
      setIsError(true);
      return;
    }
    setCurrentRange([...range(min, max)]);
    setIsError(false);
    return;
  };

  const handleReset = (event) => {
    setCurrentRange([]);
  };

  return (
    <Box>
      <Stack spacing={2}>
        <FormControl isInvalid={isError}>
          <FormLabel>Minimum Value</FormLabel>
          <NumberInput
            defaultValue={min}
            min={1}
            onChange={(e) => handleChange(e, "min")}
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
            defaultValue={max}
            min={min}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {!isError ? (
            <FormHelperText>Enter a valid range of numbers.</FormHelperText>
          ) : (
            <FormErrorMessage>
              The current range is invalid. Is the minimum greater than max?
            </FormErrorMessage>
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
