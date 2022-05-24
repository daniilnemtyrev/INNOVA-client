import React from 'react';

import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  name: string;
  surname: string;
}

const Content = styled.button`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border: 4px solid ${colors.purple[1]};
  background-color: ${colors.blue[7]};
  border-radius: 50%;
  overflow: hidden;
`;

const Label = styled.span`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
`;

export const UserCard = ({ name, surname }: Props) => {
  const label = `${name[0]} ${surname[0]}`;
  return (
    <Content>
      <Label>{label}</Label>
    </Content>
  );
};
