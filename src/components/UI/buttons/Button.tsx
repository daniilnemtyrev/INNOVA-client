import React from 'react';
import styled from 'styled-components';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: any) => void;
  children?: string;
}

const Container = styled.button`
  min-width: 100px;
  height: 35px;
  background-color: #5181b8;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  margin-bottom: 10px;
  margin-top: 3px;
  font-family: 'Roboto Slab', serif;
  cursor: pointer;
`;

export const Button = ({ type, onClick, children, ...rest }: Props) => {
  return (
    <Container type={type} onClick={onClick} {...rest}>
      {children}
    </Container>
  );
};
