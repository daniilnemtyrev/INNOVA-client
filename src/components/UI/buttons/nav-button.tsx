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

const NavButton = (props: Props) => {
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
    id,
    currentItemId,
    ...rest
  } = props;
  console.log(id, currentItemId);

  const isActive = id === currentItemId;
  return (
    <Container isActive={isActive}>
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
    </Container>
  );
};

export default withRouter(NavButton);
