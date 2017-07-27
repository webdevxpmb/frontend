import { injectGlobal } from 'styled-components';

import './app.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
