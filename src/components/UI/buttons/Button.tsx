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
  min-width: 100px;
  max-width: 200px;
  height: 35px;
  background-color: ${props =>
    props.disabled ? colors.grey[0] : colors.white[0]};
  border-radius: 3px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: none;
  color: ${colors.blue[3]};
  margin-bottom: 10px;
  margin-top: 3px;
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: ${props =>
      props.disabled ? colors.grey[0] : colors.blue[0]};
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
