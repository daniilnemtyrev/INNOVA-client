import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { setTimeout } from 'timers';
import { useStores } from '../../hooks/useStore';
import { BackArrow } from '../../icons/back-arrow';
import { ITrack } from '../../models/ITrack';
import { colors } from '../../styles/colors/colors';
import { GridLoader } from '../Loaders/grid-loader';
import { BackButton } from '../UI/buttons/back-button';
import LinkButton from '../UI/buttons/link-button';
import { GridCard } from './grid-card';

export const Content = styled.main`
  position: relative;
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${colors.grey[0]};
  padding: 25px 100px 25px 100px;
  border-radius: 10px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;

export const TracksGrid = observer(() => {
  const { rootStore } = useStores();
  const projectStore = rootStore.projectStore;
  const tracks = projectStore.tracks;

  const chooseTrackAsync = async (data: ITrack) => {
    projectStore.project.trackId = data.trackId;
    projectStore.project.trackName = data.name;
    projectStore.project.trackDescription = data.description;
  };

  useEffect(() => {
    if (tracks.length < 1) {
      projectStore.setIsLoading(true);
      const getTracks = async () => {
        console.log(projectStore.isLoading);

        await projectStore.getAllTracks();

        projectStore.setIsLoading(false);
      };
      getTracks();
    }
  }, []);

  return (
    <Content>
      {projectStore.isLoading ? (
        <>
          <BackButton to="/profile" />

          <GridLoader />
        </>
      ) : (
        <>
          <BackButton to="/profile" />
          {tracks.map(track => {
            const data = {
              trackId: track.trackId,
              name: track.name,
              description: track.description,
            };
            return (
              <GridCard
                onClick={() => chooseTrackAsync(data)}
                name={track.name}
              />
            );
          })}
        </>
      )}
    </Content>
  );
});
