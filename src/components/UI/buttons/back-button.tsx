/* eslint-disable react/require-default-props */
import React from 'react';
import { Link, To, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BackArrow } from '../../../icons/back-arrow';

interface Props {
  to?: To;
  onClick?: () => void;
}

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  border: none;
  background: none;
  &:hover {
    background-color: transparent;
  }
`;

export const BackButton = ({ to = '', onClick }: Props) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (onClick !== undefined) onClick();

    if (to === '') navigate(-1);
  };

  return (
    <Container to={to} onClick={() => goBack()}>
      <BackArrow />
    </Container>
  );
};
