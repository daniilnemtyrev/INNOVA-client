import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/UI/buttons/button-base';
import { Content } from '../styles/general';

export const Tracks = () => {
  return (
    <Content>
      <Link to="/profile/tracks/cases">
        <Button>Трек</Button>
      </Link>
    </Content>
  );
};
