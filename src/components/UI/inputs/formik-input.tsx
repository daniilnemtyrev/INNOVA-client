import { FormikTouched } from 'formik';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { LoginInput } from '../../Login/login-formik';
import { Input } from './Input';

interface Props {
  value?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  handleChange: (e: string | ChangeEvent<any>) => void;
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error?: string;
  touched?: boolean;
}

export const Error = styled.p`
  color: red;
  font-size: 12px;
  font-family: 'Roboto Slab', serif;
  margin: 0;
  padding: 0;
  margin-bottom: 3px;
  text-decoration: none;
`;

export const FormikInput = ({
  value,
  handleBlur,
  name,
  type,
  placeholder,
  touched,
  error,
  handleChange,
}: Props) => {
  console.log(touched);

  return (
    <>
      <Input
        value={value}
        onBlur={handleBlur}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {touched && error && <Error>{error}</Error>}
    </>
  );
};
