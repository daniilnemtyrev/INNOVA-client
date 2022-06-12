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
  width: 500px;
  border-radius: 10px;
  height: 200px;
  border: none;
  align-items: center;
  justifu-content: center;
  box-shadow: none;
  margin-bottom: 20px;
  background-color: ${colors.grey[2]};
  &:hover {
    background-color: #3a3b3c;
  }
`;

const Description = styled.div<{ desVisible: boolean }>`
  padding: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 10;
  display: ${props => (props.desVisible ? 'flex' : 'none')};
  opacity: ${props => (props.desVisible ? 0.93 : 0)};
  transition: all 0.2s ease-in-out;
`;

const Text = styled.p`
  color: ${colors.white[0]};
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;
const TextContainer = styled.div<{ desVisible: boolean }>`
  display: ${props => (props.desVisible ? 'none' : 'flex')};
  display: {focus? 'none'}
  width: 90%;
  height: 90%;
  align-items: center;
  justify-content: center;
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
        <TextContainer desVisible={desVisible}>
          <Text>{name}</Text>
        </TextContainer>
        <Description desVisible={desVisible}>
          <Text>{description}</Text>
        </Description>
      </Container>
    </Link>
  );
};
