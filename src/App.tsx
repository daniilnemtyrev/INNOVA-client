import './App.css';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRouter from './components/AppRouter';
import GlobalStyle from './styles/global';
import { useStores } from './hooks/useStore';
import { ModalsContextProvider } from './context/modals-context';
import { Layout } from './components/general/Layout';
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => {
  const rootStore = useStores();
  const { authStore } = rootStore;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      authStore.checkAut();
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ModalsContextProvider>
        <ToastContainer />
        <Layout>
          <AppRouter />
        </Layout>
      </ModalsContextProvider>
    </BrowserRouter>
  );
};

export default observer(App);
