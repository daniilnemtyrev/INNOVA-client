import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { Task } from '../../models/task';
import { DeleteIcon } from './cross-svgrepo-com';

const TaskContainer = styled.div<{ taskUser: boolean }>`
  min-height: 40px;
  padding: 5px;
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 10px;
  background-color: ${props => (props.taskUser ? 'red' : 'wheat')};
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
const Description = styled.p`
  color: black;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  overflow-wrap: break-word;
`;
const UserName = styled.p`
  color: black;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  overflow-wrap: break-word;
`;
const XButton = styled.div`
  cursor: pointer;
  margin: 7px;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  top: 0;
  right: 0;
`;
const DesDiv = styled.div`
  width: 70%;
`;
const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

interface Prop {
  task: Task;
}
export const TaskCard = ({ task }: Prop) => {
  const rootStore = useStores();
  const { projectStore, teamStore, userStore } = rootStore;
  const { users } = teamStore.team;
  const taskUser = task.userId === userStore.user.id;
  const user = users.find(item => item.id === task.userId);
  const deleteTask = async () => {
    await projectStore.deleteTaskById(task.id!);
  };
  return (
    <TaskContainer taskUser={taskUser}>
      <DesDiv>
        <Description>{task.description}</Description>
      </DesDiv>
      <NameDiv>
        <UserName>{user?.name}</UserName>
        <UserName>{user?.surname}</UserName>
      </NameDiv>

      <XButton onClick={deleteTask}>
        <DeleteIcon />
      </XButton>
    </TaskContainer>
  );
};
