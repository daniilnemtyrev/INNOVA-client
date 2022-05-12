import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { OptionsModal } from './options-modal';
import NavButton from '../UI/buttons/nav-button';
import logo from '../../icons/logo_innova_2.png';
import { NavIcon } from '../../icons/nav-icon';
import { useModalContext } from '../../context/modals-context';

interface NavElems {
  id: number;
  content: string | React.ReactElement;
  to?: any;
  onClick?: () => void;
}

const Container = styled.header`
  width: 100%;
  height: 120px;
  grid-columns: 2/3;
  grid-row: 1/2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  box-shadow: 0px 0px 5px 0px rgba(122, 122, 122, 0.2);
  background: transparent;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavContent = styled.ul`
  display: flex;
  > * {
    &:first-child {
      margin: 0;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  width: 380px;
  align-items: center;
  justify-content: space-between;
`;

const LogoText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 28px;
  line-height: 56px;
  color: ${colors.white[0]};
`;

const LogoImage = styled.img`
  width: 100px;
  height: 90px;
`;

export const Header = observer(() => {
  const { rootStore } = useStores();
  const otherStore = rootStore.otherStore;
  const { setHeaderModalVisible } = useModalContext();

  return (
    <Container>
      <Logo>
        <LogoText>ИННОВА ФОРУМ</LogoText>
        <LogoImage src={logo} />
      </Logo>

      <Nav>
        <NavContent>
          <NavButton
            id={0}
            to="/home"
            onClick={() => otherStore.setNavCurrentId(0)}
            currentItemId={otherStore.navCurrentId}
          >
            Главная
          </NavButton>

          <NavButton
            id={1}
            to="/home"
            onClick={() => otherStore.setNavCurrentId(1)}
            currentItemId={otherStore.navCurrentId}
          >
            Новости
          </NavButton>

          <NavButton
            id={2}
            onClick={() => otherStore.setNavCurrentId(2)}
            currentItemId={otherStore.navCurrentId}
          >
            ИННОВА
          </NavButton>

          <NavButton
            id={3}
            onClick={() => {
              setHeaderModalVisible(prev => !prev);
              otherStore.setNavCurrentId(3);
            }}
            currentItemId={otherStore.navCurrentId}
          >
            <NavIcon />
          </NavButton>
        </NavContent>

        <OptionsModal />
      </Nav>
    </Container>
  );
});
