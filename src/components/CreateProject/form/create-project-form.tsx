import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';
import LinkButton from '../../UI/buttons/link-button';
import { FormikInput } from '../../UI/inputs/formik-input';

import 'react-calendar/dist/Calendar.css';

import { ICreateProjectForm } from './create-project-formik';
import { BackArrow } from '../../../icons/back-arrow';
import { useStores } from '../../../hooks/useStore';
import { Button } from '../../UI/buttons/button-base';
import { BackButton } from '../../UI/buttons/back-button';

export const Content = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  background-color: ${colors.grey[0]};
  padding: 25px 100px 25px 100px;
  border-radius: 10px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: 0 0 2px rgba(194, 195, 197);
  align-items: center;
`;

const Row = styled.div`
  width: 70%;
  min-height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelInput = styled.div`
  position: absolute;
  top: 10px;
  left: -120px;
  min-height: 40px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Exo 2', sans-serif;
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Exo 2', sans-serif;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  min-height: 40px;
  margin-bottom: 10px;
  border-radius: 6px;
  padding-left: 3px;
  font-size: 13px;
  font-family: 'Roboto Slab', serif;
  color: ${colors.grey[0]};
  padding-left: 10px;
  border: 1px solid ${colors.blue[1]};
  font-family: 'Roboto Slab', serif;
`;

export const CreateProjectForm: FC<FormikProps<ICreateProjectForm>> = observer(
  ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    handleSubmit,
  }) => {
    const { rootStore } = useStores();
    const project = rootStore.projectStore.project;

    const onBack = () => {
      project.caseId = null;
    };

    return (
      <Content>
        <BackButton onClick={onBack} />

        <Row>
          <LabelInput>Проектный трек</LabelInput>
          <TextContainer>
            <Text>{project.trackName}</Text>
          </TextContainer>
        </Row>

        <Row>
          <LabelInput>Кейс задача</LabelInput>
          <TextContainer>
            <Text>{project.caseName}</Text>
          </TextContainer>
        </Row>

        <Row>
          <LabelInput>Название проекта</LabelInput>
          <FormikInput
            value={values.name}
            name={'name'}
            type={'text'}
            placeholder={'Имя'}
            error={errors.name}
            touched={touched.name}
            handleChange={handleChange('name')}
            handleBlur={handleBlur}
          />
        </Row>

        <Row>
          <LabelInput>Описание проекта</LabelInput>
          <FormikInput
            value={values.description}
            name={'description'}
            type={'text'}
            placeholder={'Описание проекта'}
            error={errors.description}
            touched={touched.description}
            handleChange={handleChange('description')}
            handleBlur={handleBlur}
          />
        </Row>

        <Row>
          <LabelInput>Целевая аудитория</LabelInput>
          <FormikInput
            value={values.auditorium}
            name={'auditorium'}
            type={'text'}
            placeholder={'Целевая аудитория'}
            error={errors.auditorium}
            touched={touched.auditorium}
            handleChange={handleChange('auditorium')}
            handleBlur={handleBlur}
          />
        </Row>

        <Row>
          <LabelInput>Образ проекта</LabelInput>
          <FormikInput
            value={values.prototype}
            name={'prototype'}
            type={'text'}
            placeholder={'Образ проекта'}
            error={errors.prototype}
            touched={touched.prototype}
            handleChange={handleChange('prototype')}
            handleBlur={handleBlur}
          />
        </Row>
        <Row>
          <LabelInput>Unit-экономика</LabelInput>
          <FormikInput
            value={values.economy}
            name={'economy'}
            type={'text'}
            placeholder={'Unit-экономика'}
            error={errors.economy}
            touched={touched.economy}
            handleChange={handleChange('economy')}
            handleBlur={handleBlur}
          />
        </Row>

        <Row>
          <LabelInput>Маркетинг</LabelInput>
          <FormikInput
            value={values.marketing}
            name={'marketing'}
            type={'text'}
            placeholder={'Маркетинг'}
            error={errors.marketing}
            touched={touched.marketing}
            handleChange={handleChange('marketing')}
            handleBlur={handleBlur}
          />
        </Row>

        <LinkButton
          type={'submit'}
          disabled={!isValid}
          onClick={() => {
            handleSubmit();
          }}
        >
          Создать проект
        </LinkButton>
      </Content>
    );
  },
);
