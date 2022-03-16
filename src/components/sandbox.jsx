import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function SandBox() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem w="100%" h="10" bg="blue.500" />
      HELLO WORLD
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
}
