import React from 'react';
import { ThemeProvider } from 'styled-components';

function Theme({ children }) {
  const theme = {
    headerHeight: '63px',
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
