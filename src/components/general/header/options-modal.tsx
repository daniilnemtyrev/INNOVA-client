import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useModalContext } from '../../../context/modals-context';
import { useStores } from '../../../hooks/useStore';
import { Line } from '../../../icons/line';
import { colors } from '../../../styles/colors/colors';
import { TextButton } from '../../UI/buttons/text-button';

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

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10000px;
  height: 100vh;
`;

export const OptionsModal = () => {
  const { rootStore } = useStores();
  const authStore = rootStore.authStore;
  const { headerModalVisible, setHeaderModalVisible } = useModalContext();
  console.log(headerModalVisible);

  const logout = async () => {
    setHeaderModalVisible(false);
    await authStore.logout();
  };
  return (
    <>
      {headerModalVisible && (
        <Wrapper onClick={() => setHeaderModalVisible(false)}>
          <Content>
            <Li>
              <Link to="/login">
                <TextButton>Войти</TextButton>
              </Link>
            </Li>

            <Li>
              <Line />
            </Li>
            <Li>
              <Link to="/registration">
                <TextButton>Зарегистрироваться</TextButton>
              </Link>
            </Li>
          </Content>
        </Wrapper>
      )}
    </>
  );
};
