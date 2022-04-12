import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';
import { SelectBase } from './select-basic';

interface Props {
  value?: string;
  handleChange: (selectedOption: { value: string; label: string }) => void;
  error?: string;

  options: any;
  name: string;
  placeholder?: string;
}

const Container = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 40px;
`;

const LabelError = styled.div`
  background-color: ${colors.white[0]};
  padding: 3px 3px;
  position: absolute;
  top: -8px;
  left: 20px;
`;

const StyledText = styled.p`
  color: ${colors.red[0]};
  font-size: 12px;
`;

export const FormikSelect = ({
  value,

  error,
  handleChange,
  placeholder,
  options,
  name,
}: Props) => {
  console.log(value);
  console.log(error);

  return (
    <Container>
      <SelectBase
        error={error}
        name={name}
        value={value}
        options={options}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Container>
  );
};
