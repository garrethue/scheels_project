import React from "react";
import fizzBuzz from "../../../functions/fizzbuzz";
import { List, ListItem, Center } from "@chakra-ui/react";

export default function Output(props) {
  return (
    <Center>
      <List>
        {props.currentRange.map((number) => {
          return <ListItem key={number}>{fizzBuzz(number)}</ListItem>;
        })}
      </List>
    </Center>
  );
}
