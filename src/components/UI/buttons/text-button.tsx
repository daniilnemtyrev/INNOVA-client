import React from 'react';

import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  onClick?: any;
  disabled?: boolean;
  color?: string;
  children: string;
}

const Button = styled.button`
  border: none;
  box-shadow: none;
  background: transparent;
`;

const Text = styled.p`
  font-family: 'Play', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: ${colors.white[0]};
`;

export const TextButton = (props: Props) => {
  const { onClick, disabled, color, children, ...rest } = props;

  return (
    <Button disabled={disabled} onClick={onClick} {...rest}>
      <Text>{children}</Text>
    </Button>
  );
};
