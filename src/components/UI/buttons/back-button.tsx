import React from 'react';
import styled from 'styled-components';
import { BackArrow } from '../../../icons/back-arrow';
import LinkButton from './link-button';

interface Props {
  to?: string;
  onClick?: () => void;
}

const Container = styled(LinkButton)`
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
    <Container to={to} onClick={onClick}>
      <BackArrow />
    </Container>
  );
};
