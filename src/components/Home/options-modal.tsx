import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';
import { ButtonWithoutStyles } from '../UI/buttons/button-without-styles';
import LinkButton from '../UI/buttons/link-button';

interface Props {
  visible: boolean;
  setVisibleOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const Content = styled.section`
  position: absolute;
  left: 0px;
  top: 40px;
  background-color: ${colors.white[0]};
  border: 1px solid ${colors.grey[1]};
  border-radius: 5px;
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
          <LinkButton fontSize={'14px'} noStyle={true} to="/profile">
            Профиль
          </LinkButton>
          <Separator />
          <ButtonWithoutStyles fontSize={'14px'} onClick={logout}>
            Выйти
          </ButtonWithoutStyles>
        </Content>
      )}
    </>
  );
};
