import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../../hooks/useStore';
import { colors } from '../../../styles/colors/colors';
import { StateSetter } from '../../types/custom-types';

const Container = styled.div`
  width: 130px;
  height: 120px;
  border: none;
  position: relative;
  &:hover div {
    right: calc(50% - 6px);
  }
`;

const Button = styled.button`
  width: 130px;
  height: 120px;
  border: none;
  position: relative;
  background: linear-gradient(127.44deg, #505050 0%, #383838 100%);
`;

const LineTop = styled.div`
  content: '';
  position: absolute;
  width: 18px;
  height: 3px;
  background-color: ${colors.white[0]};
  display: block;
  top: calc(50% - 10px);
  right: calc(50% - 15px);
  transition: 0.4s;
`;

const LineMiddle = styled.div`
  content: '';
  position: absolute;
  width: 18px;
  height: 3px;
  background-color: ${colors.white[0]};
  display: block;
  top: calc(50%);
  right: calc(50% - 6px);
  transition: 0.4s;
`;
const LineBottom = styled.div`
  content: '';
  position: absolute;
  width: 18px;
  height: 3px;
  background-color: ${colors.white[0]};
  display: block;
  top: calc(50% + 10px);
  right: calc(50% + 7px);
  transition: 0.4s;
`;

export const SidebarButton = () => {
  const { rootStore } = useStores();
  const otherStore = rootStore.otherStore;
  return (
    <Container onClick={() => otherStore.setSidebarVisible(false)}>
      <Button />
      <LineTop />
      <LineMiddle />
      <LineBottom />
    </Container>
  );
};
