import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  grid-column: 2/3;
  grid-row: 2/3;
  background: transparent;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: transparent;
`;

export const Title = styled.h3`
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.575rem;
  color: white;
  font-family: 'Nunito', sans-serif;
  span {
    border-bottom: 3px solid #036fd5;
  }
`;
