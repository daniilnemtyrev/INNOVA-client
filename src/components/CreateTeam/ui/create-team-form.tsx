import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useStores } from '../../../hooks/useStore';
import { colors } from '../../../styles/colors/colors';
import { Button } from '../../UI/buttons/button-base';

export const Content = styled.div`
  display: flex;
  width: 650px;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  background: linear-gradient(127.44deg, #505050 0%, #383838 100%);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;

const ButtonsGroup = styled.div`
  display: flex;
`;

const Text = styled.span`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Exo 2', sans-serif;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: 40px;
  background: transparent;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
  border-bottom: 1px solid ${colors.grey[5]};
  margin-bottom: 23px;
  padding-bottom: 10px;
  &::placeholder {
    color: ${colors.grey[5]};
  }
`;

const Label = styled.h3`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
  margin-bottom: 5px;
`;

export const CreateTeamForm = observer(() => {
  const rootStore = useStores();
  const { userStore } = rootStore;
  const { teamStore } = rootStore;
  const { projectStore } = rootStore;

  const [teamName, setTeamName] = useState('');

  const createTeamAsync = async () => {
    const data = {
      name: teamName,
      userId: userStore.user.id,
    };

    await teamStore.createTeam(data);
  };

  useEffect(() => {
    const newName = `#${uuidv4().slice(0, 5)}`;
    setTeamName(newName);
  }, []);

  return (
    <Content>
      <TextContainer>
        <Label>Код команды</Label>
        <Text>{teamName}</Text>
      </TextContainer>

      <ButtonsGroup>
        <Button onClick={createTeamAsync}>Создать</Button>
      </ButtonsGroup>
    </Content>
  );
});
