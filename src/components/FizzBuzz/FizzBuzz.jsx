import React, { useState, useMemo } from "react";
import range from "../../functions/range";
import Options from "./Options/Options";
import Output from "./Output/Output";
import {
  Box,
  Heading,
  Image,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  StackDivider,
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

      if (Number.isNaN(number)) return;

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

  const handleRun = () => {
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

  const OutputJSX = useMemo(() => {
    //use useMemo ReactHook to prevent unnecessary re-rendering
    return (
      <Output
        parameters={{
          domainName,
          topLevelDomain,
          currentRange,
        }}
      />
    );
  }, [currentRange]);

  return (
    <Stack
      direction={["column", "row"]}
      divider={<StackDivider borderColor="gray.200" />}
      spacing={5}
    >
      <Box ml={3}>
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
            <Image
              fallbackSrc={
                "https://images.squarespace-cdn.com/content/53feb922e4b0260e999e33c7/1428763962384-NOSZJ216Q9N0620I5Z11/image-asset.jpeg?content-type=image%2Fjpeg"
              }
              src={"https://ibb.co/r5wCgQG"}
              alt={"Avatar Alt"}
              mb={1}
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
              the gear icon for more options.{" "}
            </Text>

            <Stack align={"left"} justify={"left"} direction={"row"} mt={6}>
              <Options
                parameters={{
                  isInError,
                  min,
                  max,
                  handleChange,
                  setIsInError,
                  clearResults,
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
                boxShadow={
                  "0px 1px 25px -5px rgb(207 207 207 / 48%), 0 10px 10px -5px rgb(207 207 207 / 43%)"
                }
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
      </Box>
      <Box mt={3} ml={3}>
        <Center>{OutputJSX}</Center>
      </Box>
    </Stack>
  );
}
