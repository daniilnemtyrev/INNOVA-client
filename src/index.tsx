import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RootStoreProvider } from './stores/root-provider';

ReactDOM.render(
  <RootStoreProvider>
    <App />
  </RootStoreProvider>,
  document.getElementById('root'),
);
