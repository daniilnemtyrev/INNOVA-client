/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  value?: string;
  onChange?: (e: any) => void;
  onBlur?: any;
  placeholder?: string;
  name?: string;
  type?: string;
  required?: boolean;
}

const Input = styled.input.attrs({
  placeholderTextColor: colors.grey[5],
})`
  width: 100%;
  min-height: 40px;
  box-shadow: none;
  border: none;
  background-color: none;
  background: transparent;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
  border-bottom: 1px solid ${colors.grey[5]};
  &::placeholder {
    color: ${colors.grey[5]};
  }
`;

export const InputBase = ({
  value,
  placeholder,
  name,
  type,
  required,
  onChange,
  onBlur,
  ...rest
}: Props) => {
  return (
    <>
      <Input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
    </>
  );
};
