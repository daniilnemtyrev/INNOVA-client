import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: ${colors.grey[6]};
  padding: 10px 10px;
`;

const Text = styled.span`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
  margin-bottom: 5px;
`;

export const ProfileOtherCard = () => {
  const rootStore = useStores();
  const { userStore } = rootStore;
  const { user } = userStore;
  return (
    <Content>
      <Text>
        {`Место работы / учебы:    ${
          user.place_of_work_stud ? user.place_of_work_stud : '-'
        }`}
      </Text>
      <Text>{`Должность: ${user.post_status ? user.post_status : '-'}`}</Text>
      <Text>{`Номер телефона: ${user.phone ? user.phone : '-'}`}</Text>
    </Content>
  );
};
