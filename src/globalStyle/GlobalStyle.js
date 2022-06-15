import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root {
   display: flex;
   min-width: 100vw;
   height: 100vh;
  }

  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
   * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    /* overflow-y: hidden; */
  }
  
  a, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
