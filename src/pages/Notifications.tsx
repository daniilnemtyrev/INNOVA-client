import { observer } from 'mobx-react-lite';
import React from 'react';
import { PageHeader } from '../components/general/ui/page-header';
import { NotificationsMain } from '../components/Notifications/notifications-main';

import { Content } from '../styles/general';

const Notifications = () => {
  return (
    <Content>
      <PageHeader label="Уведмоления" to="/home" />
      <NotificationsMain />
    </Content>
  );
};

export default observer(Notifications);
