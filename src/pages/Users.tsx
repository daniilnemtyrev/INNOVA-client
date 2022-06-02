import React from 'react';
import { PageHeader } from '../components/general/ui/page-header';
import { UsersMain } from '../components/Users/users-main';
import { Content } from '../styles/general';

export const Users = () => {
  return (
    <Content>
      <PageHeader label="Участники форума" />
      <UsersMain />
    </Content>
  );
};
