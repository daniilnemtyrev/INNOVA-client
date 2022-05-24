import React from 'react';
import styled from 'styled-components';
import { Content } from '../styles/general';
import { PageHeader } from '../components/general/ui/page-header';
import { CreateTeamMain } from '../components/CreateTeam/create-team-main';

export const CreateTeam = () => {
  return (
    <Content>
      <PageHeader label="Создайте команду" />
      <CreateTeamMain />
    </Content>
  );
};
