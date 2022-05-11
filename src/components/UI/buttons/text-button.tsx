import React from 'react';

import { withRouter } from 'react-router';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  [x: string]: any;
  history: any;
  location: any;
  match: any;
  staticContext: any;
  to?: any;
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

const TextButton = (props: Props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    disabled,
    color,
    children,
    ...rest
  } = props;

  return (
    <Button
      disabled={disabled}
      onClick={() => {
        onClick && onClick();
        to && history.push(to);
      }}
      {...rest}
    >
      <Text>{children}</Text>
    </Button>
  );
};

export default withRouter(TextButton);
