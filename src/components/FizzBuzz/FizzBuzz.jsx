import React from "react";
import fizzBuzz from "../../modules/fizzbuzz";
import { Box, Grid, GridItem, Button, List, ListItem } from "@chakra-ui/react";

export default function FizzBuzz() {
  return (
    <Box>
      <Grid w="100%">
        <GridItem w="100%" h="100%" bg="blue.500" justifyContent="center">
          <h1>Options</h1>
          <div>
            Min: <input></input>
          </div>
          <div>
            Max: <input></input>
          </div>
          <Button>Calculate</Button>
        </GridItem>
        <GridItem w="100%" h="100%" bg="blue.500" justifyContent="center">
          <List>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (element) => {
                return <ListItem>{fizzBuzz(element)}</ListItem>;
              }
            )}
          </List>
        </GridItem>
      </Grid>
    </Box>
  );
}
