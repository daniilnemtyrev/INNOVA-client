import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: any) => void;
  children?: string | JSX.Element;
  disabled?: boolean;
}

const Container = styled.button<{ disabled?: boolean }>`
  height: 34px;
  background-color: ${props =>
    props.disabled ? colors.grey[5] : colors.blue[5]};
  border-radius: 2px;
  box-shadow: none;
  border: none;
  color: ${props => (props.disabled ? colors.grey[2] : colors.white[0])};
  padding: 8px 16px;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  &:hover {
    background-color: ${props =>
      props.disabled ? colors.grey[5] : colors.blue[6]};
  }
`;

export const Button = ({
  type,
  onClick,
  children,
  disabled,
  ...rest
}: Props) => {
  return (
    <Container type={type} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </Container>
  );
};
