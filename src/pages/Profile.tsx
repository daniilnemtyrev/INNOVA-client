import { observer } from 'mobx-react-lite';
import React from 'react';
import { PageHeader } from '../components/general/ui/page-header';

import { ProfileMain } from '../components/Profile/profile-main';
import { Content } from '../styles/general';

const Profile = () => {
  return (
    <Content>
      <PageHeader label="Профиль" to="/home" />
      <ProfileMain />
    </Content>
  );
};

export default observer(Profile);
