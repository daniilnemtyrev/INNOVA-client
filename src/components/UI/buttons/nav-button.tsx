/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  onClick?: any;
  disabled?: boolean;
  color?: string;
  id: number;
  children: string | React.ReactElement;
  currentItemId: number;
}

const Container = styled.li<{ isActive: boolean }>`
  list-style-type: none;
  margin-left: 68px;
  position: relative;
  > * {
    &::after {
      position: absolute;
      content: '';
      width: 21px;
      height: 2px;
      background-color: ${colors.white[0]};
      display: block;
      bottom: -14px;
      opacity: 0;
      transition: 0.2s;
    }
  }
  ${props =>
    props.isActive &&
    ` > * {
    &::after  {
      opacity:1 ;
    },

  }`}
  > * {
    &:hover::after  {
      opacity:1 ;
    },
  }
`;

const Button = styled.button`
  border: none;
  box-shadow: none;
  background: transparent;
`;

const Text = styled.p`
  font-family: 'Play', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  color: ${colors.white[0]};
`;

export const NavButton = (props: Props) => {
  const { onClick, disabled, color, children, id, currentItemId, ...rest } =
    props;

  const isActive = id === currentItemId;
  return (
    <Container isActive={isActive}>
      <Button disabled={disabled} onClick={onClick} {...rest}>
        <Text>{children}</Text>
      </Button>
    </Container>
  );
};
