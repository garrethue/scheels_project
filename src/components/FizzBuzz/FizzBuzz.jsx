import React, { useState } from "react";
import range from "../../functions/range";
import Options from "./Options/Options";
import Output from "./Output/Output";
import { Box, Button, Stack, Grid, GridItem } from "@chakra-ui/react";

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

  const clearResults = () => {
    setCurrentRange([]);
  };

  const handleReset = () => {
    setMin(1);
    setMax(100);
    setIsInError(false);
  };

  return (
    <Grid templateColumns="repeat(5, 1fr)">
      <GridItem>
        <Options
          isInError={isInError}
          min={min}
          max={max}
          handleChange={handleChange}
          setIsInError={setIsInError}
          handleReset={handleReset}
        />
        <Box>
          <Button onClick={handleRun}>Run</Button>
          <Button onClick={clearResults}>Clear</Button>
        </Box>
        <Box>Min: {min}</Box>
        <Box>Max: {max}</Box>
      </GridItem>
      <GridItem>
        <Output currentRange={currentRange} />
      </GridItem>
    </Grid>
  );
}
