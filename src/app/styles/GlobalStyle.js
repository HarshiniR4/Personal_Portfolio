import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #111; /* Dark background */
    color: #f5f5f5; /* Light text */
    overflow-x: hidden;
  }

  h1, h2, h3 {
    color: #e91e63; /* Accent color */
  }

  a {
    color: #e91e63;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff4081; /* Lighter pink on hover */
    }
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
