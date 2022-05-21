import { observer } from 'mobx-react-lite';
import React from 'react';

import { ProfileMain } from '../components/Profile/profile-main';
import { Content } from '../styles/general';

const Profile = () => {
  return (
    <Content>
      <ProfileMain />
    </Content>
  );
};

export default observer(Profile);
