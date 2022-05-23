import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { PageHeader } from '../components/general/ui/page-header';

import { TeamMain } from '../components/Team/team-main';

import { Content } from '../styles/general';

const StyledContent = styled(Content)`
  flex-direction: column;
  align-items: flex-start;
`;

const Team = () => {
  return (
    <StyledContent>
      <PageHeader label="Команда" to="/profile" />
      <TeamMain />
    </StyledContent>
  );
};

export default observer(Team);
