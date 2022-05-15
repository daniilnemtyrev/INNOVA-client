/* eslint-disable react/function-component-definition */
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/general/header/header';
import { Sidebar } from '../components/general/sidebar/sidebar';
import { HomeMain } from '../components/Home/home-main';

const Home = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <HomeMain />
    </>
  );
};

export default observer(Home);
