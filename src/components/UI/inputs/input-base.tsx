import React from 'react';
import styled from 'styled-components';
import { Line } from '../../../icons/line';
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

const Input = styled.input`
  width: 100%;
  min-height: 40px;
  margin-bottom: 10px;
  box-shadow: none;
  border: none;
  background-color: none;
  background: transparent;
  font-size: 13px;
  color: ${colors.white[0]};
  border-bottom: 1px solid ${colors.grey[1]};

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid green;
    -webkit-text-fill-color: green;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
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
