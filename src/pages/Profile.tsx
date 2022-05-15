/* eslint-disable react/function-component-definition */
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Header } from '../components/general/header/header';
import { Sidebar } from '../components/general/sidebar/sidebar';
import { ProfileCard } from '../components/Profile/profile-card';
import { ProfileMain } from '../components/Profile/profile-main';

const Profile = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <ProfileMain />
    </>
  );
};

export default observer(Profile);
