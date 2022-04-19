import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: any) => void;
  children?: string;
  disabled?: boolean;
  color?: string;
  fontSize?: string;
}

const Container = styled.button<{ disabled?: boolean }>`
  border: none;
  box-shadow: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    p {
      color: ${colors.blue[1]};
    }
  }
`;

const Text = styled.p<{ color?: string; fontSize?: string }>`
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`;

export const ButtonWithoutStyles = ({
  type,
  onClick,
  children,
  disabled,
  color = colors.blue[3],
  fontSize = '25px',
  ...rest
}: Props) => {
  return (
    <Container type={type} onClick={onClick} disabled={disabled}>
      <Text color={color} fontSize={fontSize}>
        {children}
      </Text>
    </Container>
  );
};
