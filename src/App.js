import FizzBuzz from "./components/FizzBuzz/FizzBuzz";
import { Center, Box } from "@chakra-ui/react";
function App() {
  return (
    <Box m={5}>
      <Center>
        <FizzBuzz />
      </Center>
    </Box>
  );
}

export default App;
