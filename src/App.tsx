import './App.css';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { useStores } from './hooks/useStore';
import { ModalsContextProvider } from './context/modals-context';

const App: React.FC = () => {
  const { rootStore } = useStores();
  const authStore = rootStore.authStore;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      authStore.checkAut();
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ModalsContextProvider>
        <AppRouter />
      </ModalsContextProvider>
    </BrowserRouter>
  );
};

export default observer(App);
