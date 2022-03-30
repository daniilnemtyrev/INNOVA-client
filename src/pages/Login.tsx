import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Container } from '../styles/auth.module.';
import { LoginFormik } from '../components/Login/login-formik';

const Login: FC = () => {
  return (
    <Container>
      <LoginFormik />
    </Container>
  );
};

export default observer(Login);
