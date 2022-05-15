/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */

import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';
import { InputBase } from './input-base';

interface Props {
  value?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  handleChange: any;
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error?: string;
  touched?: boolean;
  children?: React.ReactNode;
  setCalendarVisible?: () => void;
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 23px;
  max-height: 30px;
  width: 100%;
`;

const Input = styled(InputBase)<{ error?: string; touched?: boolean }>`
  border-color: ${props => props.error && props.touched && colors.red[1]};
`;

const LabelError = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
`;

const StyledText = styled.p`
  color: ${colors.red[1]};
  font-size: 12px;
`;

const Icon = styled.button`
  position: absolute;
  right: 20px;
  top: 12px;
  border: none;
  background: none;
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
  children,
  setCalendarVisible,
}: Props) => {
  return (
    <Container>
      {error && touched ? (
        <LabelError>
          <StyledText>{error}</StyledText>
        </LabelError>
      ) : null}
      <Input
        error={error}
        touched={touched}
        value={value}
        onBlur={handleBlur}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {children && <Icon onClick={setCalendarVisible}>{children}</Icon>}
    </Container>
  );
};
