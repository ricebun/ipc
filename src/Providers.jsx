import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
      <RouterProvider router={router} />
    </Provider>
  );
}

export default Providers;
