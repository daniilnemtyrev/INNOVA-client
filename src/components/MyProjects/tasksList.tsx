import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { TaskCard } from './taskCard';
import { UserCard } from './dropdowncard';
import { CloseIcon } from './cross-svgrepo-com (1)';

export const TaskList = observer(() => {
  const rootStore = useStores();
  const { userStore, projectStore, teamStore } = rootStore;
  const { tasks } = projectStore;
  const [des, setDescription] = useState('');
  const [userName, setUserName] = useState('');
  const [userIdent, setUserId] = useState(0);
  const [usersVisible, setUsersVisible] = useState(false);
  const { users } = teamStore.team;

  const createTask = async () => {
    await projectStore.createTask({
      userId: userIdent,
      description: des,
      projectId: userStore.user.projectId,
    });
  };
  useEffect(() => {
    const getTasks = async () => {
      await projectStore.getTasksByProjectId(userStore.user.projectId);
    };
    getTasks();
  }, []);

  const [addVisible, setAddVisible] = useState(false);
  return (
    <Content>
      <AddContainer>
        <AddButton onClick={() => setAddVisible(true)}>
          <ButtonText>Добавить задачу</ButtonText>
        </AddButton>
        <AddBlock visible={addVisible}>
          <CloseButton
            onClick={() => {
              setAddVisible(false);
              setUserName('');
              setDescription('');
            }}
          >
            <CloseIcon />
          </CloseButton>
          <DecInput
            placeholder="Описание задачи"
            value={des}
            onChange={e => setDescription(e.target.value)}
          />

          <UserCheck onClick={() => setUsersVisible(!usersVisible)}>
            {userName}
          </UserCheck>
          <UsersBlock usersVisible={usersVisible}>
            {users.map(item => (
              <UserCard
                user={item}
                setUserId={setUserId}
                setUserName={setUserName}
                setVisible={setUsersVisible}
              />
            ))}
          </UsersBlock>

          <OkButton onClick={() => setAddVisible(false)}>
            <OkText
              onClick={async () => {
                await createTask();
                setUserName('');
                setDescription('');
              }}
            >
              Назначить
            </OkText>
          </OkButton>
        </AddBlock>
      </AddContainer>

      {tasks.map(task => (
        <TaskCard task={task} />
      ))}
    </Content>
  );
});

const UserCheck = styled.div`
  cursor: pointer;
  border: 1px solid black;
  margin-top: 10px;
  text-align: center;
  width: 100%;
  background-color: white;
  height: 30px;
`;
const UsersBlock = styled.div<{ usersVisible: boolean }>`
  display: ${props => (props.usersVisible ? 'flex' : 'none')};
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;

const AddContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const OkButton = styled.div`
  &:hover {
    background-color: lightgreen;
  }
  padding: 4px;
  margin-top: 20px;
  background-color: #4cca4c;
  border-radius: 10px;
  width: 110px;
  height: 30px;
  text-align: center;
  cursor: pointer;
`;

const CloseButton = styled.div`
  margin: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;
const AddBlock = styled.div<{ visible: boolean }>`
  border-radius: 5px;
  padding: 5px;
  background-color: hsl(0, 0.6134969325153352%, 68.03921568627452%);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  display: ${props => (props.visible ? 'flex' : 'none')};
  width: 100%;
`;
const DecInput = styled.input`
  width: 100%;
  border-radius: 4px;
  height: 50px;
  margin-top: 40px;
`;

const AddButton = styled.div`
  margin-bottom: 10px;
  &:hover {
    background-color: lightgreen;
  }
  background-color: #4cca4c;
  border-radius: 10px;
  width: 150px;
  height: 55px;
  text-align: center;
  cursor: pointer;
`;
const Content = styled.div`
  position: relative;
  justify-content: center;
  margin-left: 50px;
  width: 700px;
  flex-direction: column;
  display: flex;
`;
const ButtonText = styled.h1`
  color: black;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;
const OkText = styled.h1`
  color: black;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;
