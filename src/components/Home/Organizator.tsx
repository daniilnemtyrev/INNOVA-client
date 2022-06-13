import React from 'react';
import styled from 'styled-components';
import { Title } from '../../styles/general';
import logo from '../../icons/logo_istu.png';

const ImageWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

export const Organizator = () => {
  return (
    <>
      <Title>
        <span>Организатор</span>
      </Title>
      <p
        style={{
          textAlign: 'center',
          margin: '0 20px',
          color: 'white',
          fontFamily: 'Nunito, sans-serif',
        }}
      >
        Федеральное государственное бюджетное образовательное учреждение высшего
        образования «Ижевский государственный технический университет имени М.Т.
        Калашникова»
      </p>
      <ImageWrapper>
        <img alt="logo" src={logo} width={115} height={100} />
      </ImageWrapper>
    </>
  );
};
