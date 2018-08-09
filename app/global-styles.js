import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #fafafa;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  .boldFontFamily {
    font-family: 'Fredoka One', sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
