import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    font-family: arial;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style: none;
    vertical-align: baseline;
    box-sizing: border-box;
    z-index: 0;
    outline: none;
  }
`;
