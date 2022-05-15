/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { ProfileInfoCard } from './profile-info-card';
import { ProfileOtherCard } from './profile-other-card';
import { ProfilePhotoCard } from './profile-photo-card';

const Main = styled.main`
  display: grid;
  padding-top: 30px;
  padding-left: 50px;
  grid-template-columns: 230px 600px;
  grid-template-rows: 250px 100px;
  width: 100%;
  height: calc(100vh - 120px);
  grid-columns: 2/3;
  grid-row: 2/3;
  background: transparent;
`;

export const ProfileMain = () => {
  return (
    <Main>
      <ProfilePhotoCard />
      <ProfileInfoCard />
      <ProfileOtherCard />
    </Main>
  );
};
