import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Content } from '../styles/general';
import { LoginMain } from '../components/Login/login-main';
import { PageHeader } from '../components/general/ui/page-header';

const Login: FC = () => {
  return (
    <Content>
      <PageHeader label="Авторизация" to="/home" />
      <LoginMain />
    </Content>
  );
};

export default observer(Login);
