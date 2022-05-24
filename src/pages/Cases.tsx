import React from 'react';
import styled from 'styled-components';
import { CasesMain } from '../components/Cases/cases-main';
import { PageHeader } from '../components/general/ui/page-header';
import { Content } from '../styles/general';

export const Cases = () => {
  return (
    <Content>
      <PageHeader label="Выберите кейс-задачу" />
      <CasesMain />
    </Content>
  );
};
