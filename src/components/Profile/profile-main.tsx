import React from 'react';
import styled from 'styled-components';
import { Main } from '../../styles/general';
import { ProfileInfoCard } from './profile-info-card';
import { ProfileOtherCard } from './profile-other-card';
import { ProfilePhotoCard } from './profile-photo-card';

const ProfileGrid = styled.section`
  display: grid;
  padding-top: 30px;
  padding-left: 50px;
  grid-template-columns: 230px 600px;
  grid-template-rows: 250px 100px;
  width: 100%;
  grid-column: 2/3;
  grid-row: 2/3;
  background: transparent;
  justify-content: center;
`;

export const ProfileMain = () => {
  return (
    <Main>
      <ProfileGrid>
        <ProfilePhotoCard />
        <ProfileInfoCard />
        <ProfileOtherCard />
      </ProfileGrid>
    </Main>
  );
};
