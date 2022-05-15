import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;700;800;900&family=Caudex:wght@700&family=Montserrat:wght@600&family=Orbitron:wght@700&family=Play&display=swap');
  html,
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(98.26% 251.56% at 13.33% 18.61%, #343131 0%, #1D1919 100%)
    -webkit-font-smoothing: antialiased;
  }
  * {
  box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
body, input, button {
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
