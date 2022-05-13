import React from 'react';
import styled from 'styled-components';
import { BackArrow } from '../../../icons/back-arrow';

interface Props {
  to?: string;
  onClick?: () => void;
}

const Container = styled.button`
  position: absolute;
  top: 20px;
  left: 15px;
  min-width: 40px;
  height: 40px;
  border: none;
  background: none;
  &:hover {
    background-color: transparent;
  }
`;

export const BackButton = ({ to, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <BackArrow />
    </Container>
  );
};
