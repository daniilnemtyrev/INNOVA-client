/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React, { Dispatch, SetStateAction } from 'react';
import { IUserCard } from '../../stores/team-store';

interface Props {
  user: IUserCard;
  setUserId: Dispatch<SetStateAction<number>>;
  setUserName: Dispatch<SetStateAction<string>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const UserCard = ({
  user,
  setUserId,
  setUserName,
  setVisible,
}: Props) => {
  return (
    <Card
      onClick={() => {
        setUserId(user.id);
        setUserName(user.name);
        setVisible(false);
      }}
    >
      {user.name}
    </Card>
  );
};
const Card = styled.div`
  cursor: pointer;
  text-align: center;
  width: 100%;
  background-color: white;
  height: 30px;
  border-bottom: 1px solid black;
  &:hover {
    background-color: lightgreen;
  }
`;
