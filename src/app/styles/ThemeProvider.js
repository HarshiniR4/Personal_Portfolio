// components/ThemeProvider.js
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

const lightTheme = {
  background: '#f9f9f9',
  text: '#0077b6',
  primary: '#e91e63',
};

const darkTheme = {
  background: '#212121',
  text: '#e91e63',
  primary: '#0077b6',
};

const Theme = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
