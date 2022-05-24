import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styled from 'styled-components';
import { PageHeader } from '../components/general/ui/page-header';
import { RegistMain } from '../components/Regist/regist-main';
import { Content } from '../styles/general';

const Regist: FC = () => {
  return (
    <Content>
      <PageHeader label="Регистрация" to="/home" />
      <RegistMain />
    </Content>
  );
};

export default observer(Regist);
