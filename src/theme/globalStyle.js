import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-image: linear-gradient(to bottom, blue, red);
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;
