import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 10px;
  height: 40%;
  a {
    text-decoration: none;
  }
`;

const PanelItem = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-family: 'Play', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: ${colors.white[0]};
`;

export const UserPanel = () => {
  return (
    <Container>
      <Link to="/profile">
        <PanelItem>
          <Text>Профиль</Text>
        </PanelItem>
      </Link>

      <Link to="/profile/myProject">
        <PanelItem>
          <Text>Мои проекты</Text>
        </PanelItem>
      </Link>
    </Container>
  );
};
