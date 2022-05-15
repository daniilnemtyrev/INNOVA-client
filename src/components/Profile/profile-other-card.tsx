/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors/colors';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-columns: 2/3;
  grid-row: 2/3;
  background-color: ${colors.grey[6]};
`;

export const ProfileOtherCard = () => {
  return <Content>ProfileInfoCard</Content>;
};
