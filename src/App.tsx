/* eslint-disable */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import Router from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Button colorScheme="teal">BUTTON</Button>
        <p>ddddddd</p>
        <Router></Router>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
