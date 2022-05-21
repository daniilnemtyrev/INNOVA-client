import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Content } from '../styles/general';
import { LoginMain } from '../components/Login/login-main';

const Login: FC = () => {
  return (
    <Content>
      <LoginMain />
    </Content>
  );
};

export default observer(Login);
