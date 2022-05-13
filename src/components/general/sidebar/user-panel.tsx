import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 5px;
`;

const PanelItem = styled.div``;

const Text = styled.p``;

export const UserPanel = () => {
  return (
    <Container>
      <PanelItem>
        <Text></Text>
      </PanelItem>
    </Container>
  );
};
