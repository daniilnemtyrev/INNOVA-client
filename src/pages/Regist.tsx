import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { RegistFormik } from '../components/Regist/regist-formik';
import { Header } from '../components/general/header';
import styled from 'styled-components';
import { colors } from '../styles/colors/colors';
import { Sidebar } from '../components/general/sidebar';

export const Content = styled.section`
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

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
  grid-columns: 2/3;
  grid-row: 2/3;
  background: transparent;
`;

const Regist: FC = () => {
  return (
    <Content>
      <Sidebar />
      <Header />
      <Main>
        <RegistFormik />
      </Main>
    </Content>
  );
};

export default observer(Regist);
