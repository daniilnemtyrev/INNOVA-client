import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { Line } from '../../icons/line';
import { colors } from '../../styles/colors/colors';
import TextButton from '../UI/buttons/text-button';

interface Props {
  visible: boolean;
  setVisibleOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const Content = styled.section`
  position: absolute;
  right: 10px;
  top: 70px;
  background-color: ${colors.grey[1]};
  border-radius: 5px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 30px;
`;

const Li = styled.li`
  list-style-type: none;
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
          <Li>
            <TextButton to="/login">Войти</TextButton>
          </Li>

          <Li>
            <Line />
          </Li>
          <Li>
            <TextButton to="/registration">Зарегестрироваться</TextButton>
          </Li>
        </Content>
      )}
    </>
  );
};
