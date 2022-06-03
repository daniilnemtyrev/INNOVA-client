/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';

interface Props {
  id?: number | null;
  senderName: string;
  teamId: number | null;
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

export const NotifCard = ({ senderName, teamId, id }: Props) => {
  const rootStore = useStores();
  const { userStore, invitesStore } = rootStore;

  const acceptInviteAsync = async () => {
    await invitesStore.acceptInvite({
      id,
      teamId,
      userId: userStore.user.id,
    });
  };

  const cancelInviteAsync = async () => {
    await invitesStore.cancelInvite({ id });
  };

  return (
    <Content>
      <UserInfo>
        <Icon />
        <Name>{`Приглашение на вступление в команду от ${senderName}`}</Name>
      </UserInfo>

      <Button onClick={acceptInviteAsync}>Принять</Button>
      <Button cancelType onClick={cancelInviteAsync}>
        Отклонить
      </Button>
    </Content>
  );
};
