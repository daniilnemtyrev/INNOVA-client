import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';
import { SelectBase } from './select-basic';

interface Props {
  value?: string;
  handleChange: (selectedOption: { value: string; label: string }) => void;
  error?: string;
  touched?: boolean;
  options: readonly unknown[];
  name: string;
  placeholder?: string;
}

const Container = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 40px;
`;

const SelectForm = styled(SelectBase)<{ error?: string; touched?: boolean }>`
  border-color: ${props => props.error && props.touched && colors.red[0]};
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
  touched,
  error,
  handleChange,
  placeholder,
  options,
  name,
}: Props) => {
  return (
    <Container>
      {error && touched ? (
        <LabelError>
          <StyledText>{error}</StyledText>
        </LabelError>
      ) : null}
      <SelectForm
        name={name}
        value={value}
        options={options}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Container>
  );
};
