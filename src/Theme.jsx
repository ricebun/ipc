import React from 'react';
import { ThemeProvider } from 'styled-components';

function Theme({ children }) {
  const theme = {
    headerHeight: '69px',
    colors: {
      white: '#ffffff',
      duke_blue: '#003d7c',
      duke_grey: '#f7f7f7',
      slate_10: '#eef2f5',
      slate_110: '#172733',
      slate_70: '#6f7a81',
    },
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
