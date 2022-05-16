import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styled from 'styled-components';
import { RegistFormik } from '../components/Regist/regist-formik';
import { Header } from '../components/general/header/header';
import { Sidebar } from '../components/general/sidebar/sidebar';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
  grid-columns: 2/3;
  grid-row: 2/3;
  background: transparent;
  width: 100%;
`;

const Regist: FC = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Main>
        <RegistFormik />
      </Main>
    </>
  );
};

export default observer(Regist);
