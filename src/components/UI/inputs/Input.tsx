import React from 'react';
import styled from 'styled-components';

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
  max-width: 270px;
  min-height: 25px;
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: none;
  border: none;
  padding-left: 3px;
  box-shadow: 0 0 2px rgba(194, 195, 197);
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
