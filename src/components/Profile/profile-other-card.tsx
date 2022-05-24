import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors/colors';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: ${colors.grey[6]};
`;

export const ProfileOtherCard = () => {
  return <Content>ProfileInfoCard</Content>;
};
