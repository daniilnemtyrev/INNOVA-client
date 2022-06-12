/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

export const UserCard = ({ user, setUserId, setUserName, setVisible }: any) => {
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
