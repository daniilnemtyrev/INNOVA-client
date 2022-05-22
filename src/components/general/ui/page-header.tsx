/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';
import { BackButton } from '../../UI/buttons/back-button';

interface Props {
  label?: string;
}

const Container = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px;
`;

const StyledText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 28px;
  line-height: 56px;
  color: ${colors.white[0]};
`;

export const PageHeader = ({ label }: Props) => {
  return (
    <Container>
      <BackButton />
      <StyledText>{label}</StyledText>
    </Container>
  );
};
