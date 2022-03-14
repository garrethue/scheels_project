import React, { useState } from "react";
import fizzBuzz from "../../modules/fizzbuzz";
import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  Center,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function* range(min, max) {
  //use a generator function for performance (ie, not creating a huge array of numbers at one time)
  for (let i = min; i <= max; i++) {
    yield i;
  }
}

export default function FizzBuzz() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [currentRange, setCurrentRange] = useState([...range(min, max)]);
  let isError = false;

  const handleChange = (number, callingComponent) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(min, max);
    if (min > max) {
      isError = true;
      return;
    }
    setCurrentRange([...range(min, max)]);
    return;
  };

  return (
    <Box>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Minimum Value</FormLabel>
          <NumberInput
            defaultValue={min}
            min={0}
            onChange={(e) => handleChange(e, "min")}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {/* <Input
            type="number"
            onChange={(event) => handleChange(event)}
            value={min}
            name="min"
          /> */}
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
          <Button onClick={handleSubmit}>Calculate</Button>
        </FormControl>

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
