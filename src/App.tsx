import './App.css';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { useStores } from './hooks/useStore';
import { ModalsContextProvider } from './context/modals-context';
import styled from 'styled-components';

const Content = styled.section<{ sidebarVisible: boolean }>`
  display: grid;
  grid-template-columns: ${props =>
    props.sidebarVisible ? '130px 1fr' : '0px 1fr'};
  grid-template-rows: 120px 1fr;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    98.26% 251.56% at 13.33% 18.61%,
    #343131 0%,
    #1d1919 100%
  );
  transition: 2s;
`;

const App: React.FC = () => {
  const { rootStore } = useStores();
  const authStore = rootStore.authStore;
  const otherStore = rootStore.otherStore;
  console.log(otherStore.sidebarVisible);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      authStore.checkAut();
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ModalsContextProvider>
        <Content sidebarVisible={otherStore.sidebarVisible}>
          <AppRouter />
        </Content>
      </ModalsContextProvider>
    </BrowserRouter>
  );
};

export default observer(App);
