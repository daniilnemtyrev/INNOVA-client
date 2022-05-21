import { observer } from 'mobx-react-lite';
import React from 'react';
import { HomeMain } from '../components/Home/home-main';
import { Content } from '../styles/general';

const Home = () => {
  return (
    <Content>
      <HomeMain />
    </Content>
  );
};

export default observer(Home);
