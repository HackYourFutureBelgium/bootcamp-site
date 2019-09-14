import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './constants';

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
  }

  html, body, #___gatsby, #___gatsby > * {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #fff;
    color: ${colors.darkPurple};
    font-size: 1.5rem;
    font-family: ${fonts.copy};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.title};
    font-weight: normal;
    color: ${colors.purple}
  }

  p {
    line-height: 1.6;
  }

  a, a:visited, a:active, a:hover {
    color: inherit;
    text-decoration: none;
  }

  .stronger {
    font-weight: 600;
  }
`;

export default GlobalStyle;
