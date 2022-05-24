import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { Main } from '../../styles/general';
import { TeamInfoCard } from './team-info-card';
import { TeamUsersCard } from './team-users-card';
import { TeamPhotoCard } from './team-photo-card';

const TeamGrid = styled.section`
  display: grid;
  padding-top: 30px;
  padding-left: 50px;
  grid-template-columns: 230px 600px;
  grid-template-rows: 250px 170px;
  width: 100%;
  height: calc(100vh - 120px);
  grid-column: 2/3;
  grid-row: 2/3;
  background: transparent;
`;

const NoTeam = styled.span`
  font-size: 26px;
  font-weight: 500;
  color: ${colors.white[0]};
  font-family: 'Montserrat', sans-serif;
`;

export const TeamMain = observer(() => {
  const rootStore = useStores();
  const { teamStore, userStore } = rootStore;
  console.log(teamStore.team.id);

  useEffect(() => {
    const getTeamAsync = async () => {
      if (userStore.user.teamId) {
        await teamStore.getUserTeam(userStore.user.teamId);
      }
    };
    getTeamAsync();
  }, []);

  return (
    <Main>
      {teamStore.team.id && (
        <TeamGrid>
          <TeamPhotoCard />
          <TeamInfoCard />
          <TeamUsersCard />
        </TeamGrid>
      )}
      {!teamStore.team.id && <NoTeam>У Вас пока нет команды</NoTeam>}
    </Main>
  );
});
