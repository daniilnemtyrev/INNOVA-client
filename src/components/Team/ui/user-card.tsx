import React from 'react';

import styled from 'styled-components';
import { useStores } from '../../../hooks/useStore';
import { CancelIcon } from '../../../icons/cancel-icon';
import { colors } from '../../../styles/colors/colors';

interface Props {
  name: string;
  id: number;
  currentUserId: number | null;
  surname: string;
  isCreator: boolean;
}

const Content = styled.button`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border: 4px solid ${colors.purple[1]};
  background-color: ${colors.blue[7]};
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
`;

const IconContainer = styled.button`
  position: absolute;
  border: none;
  box-shadow: none;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${colors.white[0]};
`;

const Label = styled.span`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
`;

export const UserCard = ({
  id,
  name,
  surname,
  currentUserId,
  isCreator,
}: Props) => {
  const rootStore = useStores();
  const { userStore } = rootStore;

  const removeUserTeamAsync = async () => {
    await userStore.removeUserTeam({ userId: id });
  };

  const label = `${name[0]} ${surname[0]}`;
  return (
    <Content>
      {currentUserId !== id && isCreator && (
        <IconContainer onClick={removeUserTeamAsync}>
          <CancelIcon />
        </IconContainer>
      )}

      <Label>{label}</Label>
    </Content>
  );
};
