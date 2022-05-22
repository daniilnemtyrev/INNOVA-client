import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageHeader } from '../components/general/ui/page-header';
import { TracksMain } from '../components/Tracks/tracks-main';
import { Button } from '../components/UI/buttons/button-base';
import { Content } from '../styles/general';

const StyledContent = styled(Content)`
  flex-direction: column;
  align-items: flex-start;
`;

export const Tracks = () => {
  return (
    <StyledContent>
      <PageHeader label="Выберите проектный трек" />
      <TracksMain />
    </StyledContent>
  );
};
