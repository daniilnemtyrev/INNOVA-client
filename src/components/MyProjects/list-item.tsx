import React from 'react';
import styled from 'styled-components';
import { IProject } from '../../models/IProject';
import { colors } from '../../styles/colors/colors';

const Content = styled.div`
  flex-direction: column;
  width: 450px;
  min-height: 40px;
  box-shadow: none;
  border: none;
  background-color: none;
  background: transparent;
  border-bottom: 1px solid ${colors.grey[5]};
  &:hover {
    background-color: ${colors.grey[1]};
  }
`;
const ProjectInfo = styled.p`
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
`;
interface Prop {
  project: IProject;
}
export const ListItem = ({ project }: Prop) => {
  return (
    <Content>
      <ProjectInfo>Название проекта: {project.name}</ProjectInfo>
      <ProjectInfo>Описание проета: {project.description}</ProjectInfo>
      <ProjectInfo>Направление: {project.trackName}</ProjectInfo>
      <ProjectInfo>
        Описание направления: {project.trackDescription}
      </ProjectInfo>
      <ProjectInfo>Аудитория проведения: {project.auditorium}</ProjectInfo>
      <ProjectInfo>Название кейса: {project.caseName}</ProjectInfo>
      <ProjectInfo>Описание кейса: {project.caseDescription}</ProjectInfo>
      <ProjectInfo>Экономика: {project.economy}</ProjectInfo>
      <ProjectInfo>Маркетинг: {project.marketing}</ProjectInfo>
      <ProjectInfo>Номер команды: {project.teamId}</ProjectInfo>
    </Content>
  );
};
