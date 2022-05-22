import React, { useState } from 'react';
import { Link, To } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';

interface Props {
  name: string;
  description: string;
  onClick: () => void;
  to: To;
}

const Container = styled.button`
  position: relative;
  width: 200px;
  height: 70px;
  border: none;
  box-shadow: none;
  margin-bottom: 20px;
  text-align: center;
  background-color: ${colors.grey[2]};
  &:hover {
    background-color: ${colors.blue[0]};
  }
`;

const Description = styled.div<{ desVisible: boolean }>`
  position: absolute;
  top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 70px;
  text-align: center;
  z-index: 10;
  background-color: ${colors.grey[4]};
  visibility: ${props => (props.desVisible ? 'visible' : 'hidden')};
  opacity: ${props => (props.desVisible ? 0.93 : 0)};
  transition: all 0.2s ease-in-out;
`;

const Text = styled.p`
  color: ${colors.white[0]};
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;

export const GridCard = ({ name, description, onClick, to }: Props) => {
  const [desVisible, setDesVisible] = useState(false);
  return (
    <Link to={to}>
      <Container
        onClick={onClick}
        onMouseEnter={() => setDesVisible(true)}
        onMouseLeave={() => setDesVisible(false)}
      >
        <Text>{name}</Text>
        <Description desVisible={desVisible}>
          <Text>{description}</Text>
        </Description>
      </Container>
    </Link>
  );
};
