import React from 'react';
import styled from 'styled-components';
import { CasesMain } from '../components/Cases/cases-main';
import { PageHeader } from '../components/general/ui/page-header';
import { Content } from '../styles/general';

const StyledContent = styled(Content)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Cases = () => {
  return (
    <StyledContent>
      <PageHeader label="Выберите кейс-задачу" />
      <CasesMain />
    </StyledContent>
  );
};
