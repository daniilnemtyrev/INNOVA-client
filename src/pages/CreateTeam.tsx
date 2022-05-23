import React from 'react';
import styled from 'styled-components';
import { Content } from '../styles/general';
import { PageHeader } from '../components/general/ui/page-header';
import { CreateTeamMain } from '../components/CreateTeam/create-team-main';

const StyledContent = styled(Content)`
  flex-direction: column;
  justify-content: flex-start;
`;

export const CreateTeam = () => {
  return (
    <StyledContent>
      <PageHeader label="Создайте команду" />
      <CreateTeamMain />
    </StyledContent>
  );
};
