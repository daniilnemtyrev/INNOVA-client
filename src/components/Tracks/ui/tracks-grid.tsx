import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStores } from '../../../hooks/useStore';
import { ITrack } from '../../../models/ITrack';
import { colors } from '../../../styles/colors/colors';
import { GridCard } from '../../general/ui/grid-card';
import { GridLoader } from '../../Loaders/grid-loader';
import { BackButton } from '../../UI/buttons/back-button';

export const Content = styled.section`
  position: relative;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: transparent;
  /* padding: 25px 100px 25px 100px; */
`;

export const TracksGrid = observer(() => {
  const rootStore = useStores();
  const { projectStore } = rootStore;
  const { tracks } = projectStore;

  const chooseTrackAsync = async (data: ITrack) => {
    projectStore.project.trackId = data.id;
    projectStore.project.trackName = data.name;
    projectStore.project.trackDescription = data.description;
  };

  useEffect(() => {
    if (tracks.length < 1) {
      projectStore.setIsLoading(true);
      const getTracks = async () => {
        await projectStore.getAllTracks();

        projectStore.setIsLoading(false);
      };
      getTracks();
    }
  }, []);
  console.log(tracks);

  return (
    <Content>
      {projectStore.isLoading ? (
        <GridLoader />
      ) : (
        <>
          {tracks.map(track => {
            const data = {
              id: track.id,
              name: track.name,
              description: track.description,
            };
            return (
              <GridCard
                to="/profile/tracks/cases"
                onClick={() => chooseTrackAsync(data)}
                name={track.name}
                description={track.description}
              />
            );
          })}
        </>
      )}
    </Content>
  );
});
