import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { NotifCard } from './notification-card';

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: flex-start;
`;

const NoUsers = styled.span`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: ${colors.white[0]};
`;

export const NotifList = observer(() => {
  const rootStore = useStores();
  const { invitesStore, userStore } = rootStore;

  useEffect(() => {
    const getInvitesAsync = async () => {
      console.log(2);

      await invitesStore.getInvites({ invitedUserId: userStore.user.id });
    };
    console.log(1);
    getInvitesAsync();
  }, []);

  console.log(invitesStore.invites);

  return (
    <Content>
      {!invitesStore.invites.length && <NoUsers>Нет уведмолений</NoUsers>}
      {invitesStore.invites &&
        invitesStore.invites.map(invite => (
          <NotifCard
            key={invite.id + invite.senderName}
            id={invite.id}
            senderName={invite.senderName}
            teamId={invite.teamId}
          />
        ))}
    </Content>
  );
});
