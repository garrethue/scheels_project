import React, { useState } from "react";
import range from "../../functions/range";
import Options from "./Options/Options";
import Output from "./Output/Output";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Avatar,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

export default function FizzBuzz() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [domainName, setDomainName] = useState("SCHEELS");
  const [topLevelDomain, setTopLevelDomain] = useState(".COM");
  const [currentRange, setCurrentRange] = useState([]);
  const [isInError, setIsInError] = useState(false);

  const handleChange = (eventObj, callingComponent) => {
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
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem>
        <Center py={6}>
          <Box
            maxW={"320px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Avatar
              size={"xlg"}
              src={"../../../public/images/scheels-logo.jpeg"}
              alt={"Avatar Alt"}
              mb={4}
              pos={"relative"}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              FizzBuzz
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              Challenge
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              Click 'Run' to output the result, 'Reset' to clear the result, or
              the gear icon for more options!{" "}
            </Text>

            <Stack align={"left"} justify={"left"} direction={"row"} mt={6}>
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
            </Stack>

            <Stack mt={8} direction={"row"} spacing={4}>
              <Button
                onClick={clearResults}
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.300",
                }}
                _hover={{
                  bg: "gray.200",
                }}
              >
                Reset
              </Button>
              <Button
                onClick={handleRun}
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"red.500"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(255 0 0 / 48%), 0 10px 10px -5px rgb(255 0 0 / 43%)"
                }
                _hover={{
                  bg: "red.400",
                }}
                _focus={{
                  bg: "red.400",
                }}
              >
                Run
              </Button>
            </Stack>
          </Box>
        </Center>
      </GridItem>
      <GridItem>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
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
