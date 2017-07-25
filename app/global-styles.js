import { injectGlobal } from 'styled-components';

import './app.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background-color: #000;
    height: 100%;
    width: 100%;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    position: relative;
    background-color: #FAFAFA;
    min-height: 100%;
    min-width: 100%;
  }

  button {
    &:hover,
    &:focus {
      outline: none;
      cursor: pointer;
    }
  }
`;
