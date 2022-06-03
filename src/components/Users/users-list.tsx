import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { UserCard } from './user-card';

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
`;

const NoUsers = styled.span`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const UsersList = observer(() => {
  const rootStore = useStores();
  const { userStore } = rootStore;

  useEffect(() => {
    userStore.getConfirmedUsers();
  }, []);

  return (
    <Content>
      {!userStore.confirmedUsers && <NoUsers>Нет доступных участников</NoUsers>}
      {userStore.confirmedUsers &&
        userStore.confirmedUsers.map(
          user =>
            user && (
              <UserCard
                id={user.id}
                key={user.id + user.name}
                name={user.name}
                surname={user.surname}
              />
            ),
        )}
    </Content>
  );
});
