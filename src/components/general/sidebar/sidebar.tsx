import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../../../hooks/useStore';
import { SidebarShow } from '../../../icons/sidebar-show';
import { colors } from '../../../styles/colors/colors';
import { SidebarButton } from '../../UI/buttons/sidebar-button';
import { UserPanel } from './user-panel';

const Container = styled.article<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  grid-columns: 1/2;
  grid-row: 1/3;
  background-color: ${colors.grey[1]};
  border-right: 1px solid ${colors.grey[2]};
  position: relative;
  transition: 0.2s;
  margin-left: ${props => (props.visible ? 0 : -130)}px;
`;

const ShowButton = styled.button`
  position: absolute;
  top: 50vh;
  right: -55px;
  width: 50px;
  height: 60px;
  border: none;
  background: none;
  box-shadow: none;
`;

export const Sidebar = observer(() => {
  const { rootStore } = useStores();
  const otherStore = rootStore.otherStore;
  return (
    <Container visible={otherStore.sidebarVisible}>
      <SidebarButton />
      <UserPanel />
      {!otherStore.sidebarVisible && (
        <ShowButton onClick={() => otherStore.setSidebarVisible(true)}>
          <SidebarShow />
        </ShowButton>
      )}
    </Container>
  );
});