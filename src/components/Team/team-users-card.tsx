import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-admin';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';
import { UserCard } from './ui/user-card';

const Content = styled.section`
  display: flex;

  flex-direction: column;
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: ${colors.grey[6]};
  flex-grow: 1;
  padding: 10px 10px;
`;

const UsersList = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 2;
`;

const ButtonsGroup = styled.section`
  display: flex;
  width: 50%;
  flex-grow: 1;
  justify-content: space-between;
`;

const Label = styled.span`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
`;

export const TeamUsersCard = observer(() => {
  const rootStore = useStores();
  const { teamStore, userStore } = rootStore;
  const { users } = teamStore.team;
  console.log(users);

  return (
    <Content>
      <Label>Участники</Label>
      <UsersList>
        {users &&
          users.map(user => (
            <UserCard
              id={user.id}
              name={user.name}
              surname={user.surname}
              currentUserId={userStore.user.id}
            />
          ))}
      </UsersList>
      <ButtonsGroup>
        <Link to="/profile/tracks">
          <Button>Пригласить участников</Button>
        </Link>
      </ButtonsGroup>
    </Content>
  );
});
