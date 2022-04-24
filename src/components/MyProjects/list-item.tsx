import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors/colors';

interface Props {
  name: string;
}

const Content = styled.div`
  background-color: none;
  align-items: center;
  padding: 10px 10px;
  border: none;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${colors.blue[0]};
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: ${colors.blue[0]};
  }
`;

export const ListItem = ({ name }: Props) => {
  return <Content>{name}</Content>;
};
