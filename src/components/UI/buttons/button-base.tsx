/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: any) => void;
  children?: string | JSX.Element;
  disabled?: boolean;
  styles?: object;
  cancelType?: boolean;
}

const Container = styled.button<{ disabled?: boolean; cancelType?: boolean }>`
  height: 34px;
  background-color: ${props =>
    props.disabled
      ? colors.grey[5]
      : props.cancelType
      ? colors.red[1]
      : colors.blue[5]};
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
      props.disabled
        ? colors.grey[5]
        : props.cancelType
        ? colors.red[0]
        : colors.blue[6]};
  }
`;

export const Button = ({
  type,
  onClick,
  children,
  disabled,
  styles,
  cancelType,
  ...rest
}: Props) => {
  return (
    <Container
      style={styles}
      cancelType={cancelType}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Container>
  );
};
