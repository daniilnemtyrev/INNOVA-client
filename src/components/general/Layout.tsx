import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';

interface Props {
  children: JSX.Element;
}

const Content = styled.section<{ sidebarVisible: boolean }>`
  display: grid;
  grid-template-columns: ${props =>
    props.sidebarVisible ? '130px 1fr' : '0px 1fr'};
  grid-template-rows: 120px 1fr;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    98.26% 251.56% at 13.33% 18.61%,
    #343131 0%,
    #1d1919 100%
  );
  transition: 2s;
`;

export const Layout = observer(({ children }: Props) => {
  const rootStore = useStores();
  const { otherStore } = rootStore;

  return (
    <Content sidebarVisible={otherStore.sidebarVisible}>
      <Sidebar />
      <Header />
      {children}
    </Content>
  );
});
