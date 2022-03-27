import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(237, 238, 240, 1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  max-width: 320px;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;
