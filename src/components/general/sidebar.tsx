import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors/colors';
import { SidebarButton } from '../UI/buttons/sidebar-button';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  height: 100vh;
  grid-columns: 1/2;
  grid-row: 1/3;
  background-color: ${colors.grey[1]};
  border-right: 1px solid ${colors.grey[2]};
`;

export const Sidebar = () => {
  return (
    <Container>
      <SidebarButton />
    </Container>
  );
};
