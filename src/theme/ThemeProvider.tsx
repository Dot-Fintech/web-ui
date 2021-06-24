import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext, ThemeContextProvider } from './context';
import GlobalStyle from './global';
import { DarkTheme, LightTheme } from './themes';

const StyledThemeProvider: React.FC = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const Provider: React.FC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <StyledThemeProvider>{children}</StyledThemeProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
