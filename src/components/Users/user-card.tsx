import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';

interface Props {
  id: number | null;
  name: string;
  surname: string;
}

const Content = styled.section`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.grey[0]};
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

const Name = styled.span`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: ${colors.grey[0]};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.blue[0]};
  margin-right: 10px;
`;

export const UserCard = ({ id, name, surname }: Props) => {
  const rootStore = useStores();
  const { userStore, invitesStore } = rootStore;
  const senderName = `${userStore.user.surname} ${userStore.user.name}`;

  const sendInviteToTeam = async () => {
    await invitesStore.sendInviteToTeam(id, userStore.user.teamId, senderName);
  };

  return (
    <Content>
      <UserInfo>
        <Icon />
        <Name>{`${name} ${surname}`}</Name>
      </UserInfo>

      <Button onClick={sendInviteToTeam}>Пригласить</Button>
    </Content>
  );
};
