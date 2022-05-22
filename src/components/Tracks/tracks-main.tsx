import React from 'react';
import styled from 'styled-components';
import { Main } from '../../styles/general';
import { TracksGrid } from './ui/tracks-grid';

const StyledMain = styled(Main)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 17px;
`;

export const TracksMain = () => {
  return (
    <StyledMain>
      <TracksGrid />
    </StyledMain>
  );
};
