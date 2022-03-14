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

  const handleChange = (e) => {
    console.log(e.target.name);
    // const input = Number(e); //change to integer
    // setMin(input);
    if (e.target.name === "min") {
      console.log(e.target.value);
      setMin(Number(e.target.value));
      return;
    }
    setMax(Number(e.target.value));
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
        <FormControl isInvalid={isError}>
          <FormLabel>Minimum Value</FormLabel>
          <Input
            type="number"
            onChange={(event) => handleChange(event)}
            value={min}
            name="min"
          />
          <FormLabel>Maximum Value</FormLabel>
          <Input
            type="number"
            onChange={(event) => handleChange(event)}
            value={max}
            name="max"
          />
          <Button onClick={handleSubmit}>Calculate</Button>
        </FormControl>

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
