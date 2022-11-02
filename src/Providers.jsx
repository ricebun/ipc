import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Article from './components/Article';
import Overview from './components/Overview';
import store from './data/store';

function Providers() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Overview />,
    },
    {
      path: '/article/:articleId',
      element: <Article />,
    },
  ]);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Public Sans", Sans-Serif;
    margin: 0;
    height: 100vh;
    background: #003d7c; // duke blue
  }
  #root {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background: #f7f7f7; // duke grey
  }
  h1 {
    font-size: 24px;
    // TODO font color
  }

  p {
    font-size: 18px;
  }
`;

export default Providers;
