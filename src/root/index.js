import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../globalStyle/GlobalStyle";
import Router from "../routing";
import { themes } from "../themes/themes";

const Root = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default Root;
