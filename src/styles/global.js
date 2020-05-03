import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Varela Round', sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #7c4dff;
    margin-bottom: 80px;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #263238;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;
