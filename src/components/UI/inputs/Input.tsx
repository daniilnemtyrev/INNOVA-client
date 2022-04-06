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

const Container = styled.input`
  width: 350px;
  min-height: 40px;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: none;
  border: none;
  padding-left: 3px;
  font-size: 13px;
  font-family: 'Roboto Slab', serif;
  color: ${colors.grey[1]};
  padding-left: 10px;
  border: 1px solid ${colors.blue[1]};
  font-family: 'Roboto Slab', serif;
`;

export const Input = ({
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
    <Container
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    />
  );
};
