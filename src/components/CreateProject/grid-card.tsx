/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors/colors';

interface Props {
  name: string;
  onClick: () => void;
}

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: 0 0 2px rgba(194, 195, 197);
  margin-bottom: 20px;
  text-align: center;
  &:hover {
    background-color: ${colors.blue[0]};
  }
`;

const Name = styled.p`
  color: ${colors.blue[3]};
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
`;

export const GridCard = ({ name, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Name>{name}</Name>
    </Container>
  );
};
