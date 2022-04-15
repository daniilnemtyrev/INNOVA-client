import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    -webkit-font-smoothing: antialiased;
  }
  * {
  box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
body, input, button {
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  box-shadow: none;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;

export default GlobalStyle;
