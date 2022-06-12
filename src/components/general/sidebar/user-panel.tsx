import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStores } from '../../../hooks/useStore';
import { colors } from '../../../styles/colors/colors';

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 10px;
  height: 40%;
  a {
    text-decoration: none;
  }
`;

const PanelItem = styled.div`
  display: flex;
  margin-bottom: 8px;
  position: relative;
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -9px;
  right: -12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${colors.blue[6]};
`;

const Text = styled.p`
  font-family: 'Play', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: ${colors.white[0]};
`;

export const UserPanel = observer(() => {
  const rootStore = useStores();
  const { userStore, invitesStore } = rootStore;
  return (
    <Container>
      <Link to="/profile">
        <PanelItem>
          <Text>Профиль</Text>
        </PanelItem>
      </Link>

      <Link to="/profile/myProject">
        <PanelItem>
          <Text>Мои проекты</Text>
        </PanelItem>
      </Link>

      <Link to="/profile/team">
        <PanelItem>
          <Text>Моя команда</Text>
        </PanelItem>
      </Link>

      <Link to="/notifications">
        <PanelItem>
          <Text>Уведмоления</Text>
          {userStore.user.invites && (
            <Counter>
              <Text>{userStore.user.invites.length}</Text>
            </Counter>
          )}
        </PanelItem>
      </Link>
    </Container>
  );
});
