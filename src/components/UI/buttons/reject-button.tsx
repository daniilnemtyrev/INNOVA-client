import React from 'react';
import { useRefresh, useRecordContext } from 'react-admin';
import styled from 'styled-components';
import { IUser } from '../../../models/IUser';
import { API } from '../../../pages/Admin';
import { colors } from '../../../styles/colors/colors';

export const RejectButton = () => {
  const refresh = useRefresh();
  const record = useRecordContext<IUser>();
  return (
    <Button
      onClick={() => {
        fetch(`${API}/users/${record.id}`, {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...record, request_status: 'Отклонена' }),
        }).then(() => refresh());
      }}
    >
      Отклонить
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
  height: 25px;
  width: 90px;
  background-color: #e05353;
  border-radius: 4px;
  text-align: center;
  color: ${colors.white};
  font: 400 14px Verdana;
  border-style: none;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${colors.darkred};
  }
`;
