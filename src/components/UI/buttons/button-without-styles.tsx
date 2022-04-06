import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: any) => void;
  children?: string;
  disabled?: boolean;
}

const Container = styled.button<{ disabled?: boolean }>`
  border: none;
  box-shadow: none;
  font-family: 'Source Sans Pro' sans-serif;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
  &:hover {
    p {
      color: ${colors.blue[2]};
    }
  }
`;

export const ButtonWithoutStyles = ({
  type,
  onClick,
  children,
  disabled,
  ...rest
}: Props) => {
  return (
    <Container type={type} onClick={onClick} disabled={disabled} {...rest}>
      <p>{children}</p>
    </Container>
  );
};
