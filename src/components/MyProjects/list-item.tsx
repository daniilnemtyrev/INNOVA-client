import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors/colors';

interface Props {
  name: string;
}

const Content = styled.div`
  width: 100%;
  min-height: 40px;
  box-shadow: none;
  border: none;
  background-color: none;
  background: transparent;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
  border-bottom: 1px solid ${colors.grey[5]};
  &:hover {
    background-color: ${colors.grey[1]};
  }
`;

export const ListItem = ({ name }: Props) => {
  return <Content>{name}</Content>;
};
