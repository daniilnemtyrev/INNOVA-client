import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { PageHeader } from '../components/general/ui/page-header';

import { TeamMain } from '../components/Team/team-main';

import { Content } from '../styles/general';

const Team = () => {
  return (
    <Content>
      <PageHeader label="Команда" to="/profile" />
      <TeamMain />
    </Content>
  );
};

export default observer(Team);
