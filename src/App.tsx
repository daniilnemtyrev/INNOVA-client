import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from './index';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const { authStore } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      authStore.checkAut();
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  );
};

export default observer(App);
