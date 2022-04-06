import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: any) => void;
  children?: string;
}

const Container = styled.button`
  min-width: 100px;
  height: 35px;
  background-color: ${colors.white[0]};
  border-radius: 3px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: none;
  color: ${colors.grey[1]};
  margin-bottom: 10px;
  margin-top: 3px;
  font-size: 13px;
  font-family: 'Roboto Slab', serif;
  cursor: pointer;
  &:hover {
    background-color: ${colors.blue[0]};
  }
`;

export const Button = ({ type, onClick, children, ...rest }: Props) => {
  return (
    <Container type={type} onClick={onClick} {...rest}>
      {children}
    </Container>
  );
};
