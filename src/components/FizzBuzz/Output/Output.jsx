import React from "react";
import fizzBuzz from "../../../functions/fizzbuzz";
import { List, ListItem } from "@chakra-ui/react";

export default function Output(props) {
  return (
    <List>
      {props.parameters.currentRange.map((number) => {
        return (
          <ListItem key={number}>
            {fizzBuzz(
              number,
              props.parameters.domainName,
              props.parameters.topLevelDomain
            )}
          </ListItem>
        );
      })}
    </List>
  );
}
