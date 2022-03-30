import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthStore from './stores/auth-store';

interface IAuthStore {
  authStore: AuthStore;
}

const authStore = new AuthStore();

export const Context = createContext<IAuthStore>({
  authStore,
});

ReactDOM.render(
  <Context.Provider value={{ authStore }}>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
