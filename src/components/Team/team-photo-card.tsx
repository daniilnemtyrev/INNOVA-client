import React from 'react';
import styled from 'styled-components';
import { UserIcon } from '../../icons/user-icon';
import { colors } from '../../styles/colors/colors';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  grid-column: 1/2;
  grid-row: 1/3;
  background-color: ${colors.grey[6]};
  margin-right: 20px;
`;

export const TeamPhotoCard = () => {
  return <Content />;
};
