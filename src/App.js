import FizzBuzz from "./components/FizzBuzz/FizzBuzz";
import { Center, Box } from "@chakra-ui/react";
import Options from "./components/Options/Options";
function App() {
  return (
    <Box m={5}>
      <Options />
      <Center>
        <FizzBuzz />
      </Center>
    </Box>
  );
}

export default App;
