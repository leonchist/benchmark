import { createGlobalStyle } from 'styled-components';
import { appColor } from 'modules/theme';

const GlobalStyle =  createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body {
    font-family: Lato, sans-serif;
    font-size: 16px; /* stylelint-disable unit-blacklist */
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${appColor};
    text-decoration: none;

    &.disabled {
      pointer-events: none;
    }
  }

  .not-found {
    text-align: center;

    h1 {
      font-size: 12.8rem;
      margin: 0;

      @include sm {
        font-size: 25.6rem;
      }
    }
  }

  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    line-height: 1;
    padding: 0;
  }
`;

export default GlobalStyle;
