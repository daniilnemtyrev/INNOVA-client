/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';
import { Button } from '../../UI/buttons/button-base';

interface Props {
  status?: string;
  profileFilled: boolean;
  onClick: () => void;
}

const Advice = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 50%;
  justify-content: space-between;
`;

const Text = styled.span`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
  font-size: 12px;
  margin-bottom: 5px;
  flex-grow: 1;
`;

export const SendRequestButton = ({
  status,
  profileFilled,
  onClick,
}: Props) => {
  return (
    <>
      {status === 'Не подтвержден' && (
        <Advice>
          {!profileFilled && (
            <Text>
              * для участия в форуме Вам нужно заполнить профиль и отправить
              заявку
            </Text>
          )}

          <Button disabled={!profileFilled} onClick={onClick}>
            Отправить заявку
          </Button>
        </Advice>
      )}
    </>
  );
};
