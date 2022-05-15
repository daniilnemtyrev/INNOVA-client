/* eslint-disable react/function-component-definition */
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { LoginFormik } from '../components/Login/login-formik';
import { Header } from '../components/general/header/header';
import { Sidebar } from '../components/general/sidebar/sidebar';
import { Main } from '../styles/general';

const Login: FC = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Main>
        <LoginFormik />
      </Main>
    </>
  );
};

export default observer(Login);
