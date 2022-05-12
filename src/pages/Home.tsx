import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/general/header';
import { Sidebar } from '../components/general/sidebar';
import { Main } from '../components/Home/home-main';

const Content = styled.section`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 120px 1fr;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    98.26% 251.56% at 13.33% 18.61%,
    #343131 0%,
    #1d1919 100%
  );
`;

const Home = () => {
  return (
    <Content>
      <Sidebar />
      <Header />
      <Main />
    </Content>
  );
};

export default observer(Home);
