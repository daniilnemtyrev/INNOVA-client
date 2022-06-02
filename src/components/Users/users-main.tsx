import React from 'react';
import styled from 'styled-components';
import { Main } from '../../styles/general';
import { UsersList } from './users-list';

const StyledMain = styled(Main)`
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 25px;
  margin-top: 20px;
`;

export const UsersMain = () => {
  return (
    <StyledMain>
      <UsersList />
    </StyledMain>
  );
};
