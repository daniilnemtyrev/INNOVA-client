import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { UserCard } from './ui/user-card';

const Content = styled.section`
  display: flex;

  flex-direction: column;
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: ${colors.grey[6]};
  padding: 10px 10px;
`;

const UsersList = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.span`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
`;

export const TeamUsersCard = observer(() => {
  const rootStore = useStores();
  const { teamStore } = rootStore;
  const { users } = teamStore.team;
  return (
    <Content>
      <Label>Участники</Label>
      <UsersList>
        {users.map(user => (
          <UserCard name={user.name} surname={user.surname} />
        ))}
      </UsersList>
    </Content>
  );
});
