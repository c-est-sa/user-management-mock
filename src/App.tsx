/* eslint-disable */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">BUTTON</Button>
      <p>ddddddd</p>
    </ChakraProvider>
  );
}

export default App;
