import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/Button';
import { ButtonWithoutStyles } from '../UI/buttons/button-without-styles';

interface Props {
  visible: boolean;
  setVisibleOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const Content = styled.section`
  position: absolute;
  left: 0px;
  top: 40px;
  background-color: ${colors.white[0]};
  border: 1px solid ${colors.blue[1]};
  border-radius: 20px;
  box-shadow: 0 0 2px rgba(194, 195, 197);
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 30px;
`;

const Separator = styled.hr`
  background-color: ${colors.blue[1]};
  margin: 10px 0px;
  width: 100%;
`;

export const OptionsModal = ({ visible, setVisibleOptions }: Props) => {
  const { rootStore } = useStores();
  const authStore = rootStore.authStore;

  const logout = async () => {
    setVisibleOptions(false);
    await authStore.logout();
  };
  return (
    <>
      {visible && (
        <Content>
          <ButtonWithoutStyles>Профиль</ButtonWithoutStyles>
          <Separator />
          <ButtonWithoutStyles onClick={logout}>Выйти</ButtonWithoutStyles>
        </Content>
      )}
    </>
  );
};
