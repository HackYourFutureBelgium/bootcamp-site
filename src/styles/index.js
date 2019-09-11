import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { colors } from './constants';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Aleo';
    src: url("...");
    font-display: swap;
  }

  @font-face {
    font-family: 'Karla';
    src: url("...");
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #fff;
    color: ${colors.black};
    font-size: 1.6rem;
    font-family: 'Karla', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Aleo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  p {
    line-height: 1.6;
  }

  a, a:visited, a:active, a:hover {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
