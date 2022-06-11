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
import AdminPage from './pages/Admin';

const App: React.FC = () => {
  const rootStore = useStores();
  const { authStore } = rootStore;
  const { userStore } = rootStore;

  const isAdmin = userStore.user.roles?.find(role => role.value === 'admin');

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
        {authStore.IsAuth && isAdmin ? (
          <AdminPage />
        ) : (
          <Layout>
            <AppRouter />
          </Layout>
        )}
      </ModalsContextProvider>
    </BrowserRouter>
  );
};

export default observer(App);
