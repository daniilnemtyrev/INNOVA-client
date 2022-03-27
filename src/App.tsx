import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from './index';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAut();
    }
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default observer(App);
