import React, { useState } from "react";
import range from "../../functions/range";
import Options from "./Options/Options";
import Output from "./Output/Output";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

export default function FizzBuzz() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [domainName, setDomainName] = useState("SCHEELS");
  const [topLevelDomain, setTopLevelDomain] = useState(".COM");
  const [currentRange, setCurrentRange] = useState([]);
  const [isInError, setIsInError] = useState(false);

  const handleChange = (eventObj, callingComponent) => {
    //TODO: handle when eventObj == undefined == null
    if (!eventObj || eventObj == null) {
      return;
    }

    if (callingComponent === "min" || callingComponent === "max") {
      const number = Number(eventObj);
      if (callingComponent === "min") {
        setMin(number);
        return;
      }
      setMax(number);
      return;
    }

    if (callingComponent === "domainName") {
      setDomainName(eventObj.target.value);
      return;
    }
    setTopLevelDomain(eventObj.target.value);
  };

  const handleRun = (event) => {
    event.preventDefault();
    setCurrentRange([...range(min, max)]);
    return;
  };

  const clearResults = () => {
    setCurrentRange([]);
  };

  const handleParameterReset = (eventObj, callingComponent) => {
    if (callingComponent === "numberRangeReset") {
      setMin(1);
      setMax(100);
    } else if (callingComponent === "domainReset") {
      setDomainName("SCHEELS");
      setTopLevelDomain(".COM");
    }
    setIsInError(false);
  };

  return (
    <Grid templateColumns="repeat(5, 1fr)">
      <GridItem>
        <Options
          parameters={{
            isInError,
            min,
            max,
            handleChange,
            setIsInError,
            handleParameterReset,
            setDomainName,
            setTopLevelDomain,
            domainName,
            topLevelDomain,
          }}
        />
        <Box>
          <Button onClick={handleRun}>Run</Button>
          <Button onClick={clearResults}>Reset</Button>
        </Box>
      </GridItem>
      <GridItem>
        <Output
          parameters={{
            domainName,
            topLevelDomain,
            currentRange,
          }}
        />
      </GridItem>
    </Grid>
  );
}
