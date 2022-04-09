import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  value?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  name?: string;
  options: readonly unknown[];
}

const Container = styled(Select)`
  width: 350px;
  min-height: 40px;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: none;
  border: 1px solid ${colors.blue[1]};
  font-size: 14px;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const SelectBase = ({
  value,
  onChange,
  name,
  placeholder,
  options,
}: Props) => {
  return (
    <Container
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      options={options}
    />
  );
};
