import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';
import { FormikInput } from '../../UI/inputs/formik-input';

import 'react-calendar/dist/Calendar.css';

import { ICreateProjectForm } from './create-project-formik';
import { useStores } from '../../../hooks/useStore';
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

const Text = styled.span`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Exo 2', sans-serif;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  box-shadow: none;
  border: none;
  background-color: none;
  background: transparent;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
  border-bottom: 1px solid ${colors.grey[5]};
  margin-bottom: 23px;
  &::placeholder {
    color: ${colors.grey[5]};
  }
`;

const ButtonsGroup = styled.div`
  display: flex;
`;

export const CreateProjectForm: FC<FormikProps<ICreateProjectForm>> = observer(
  ({
    values,
    errors,
    touched,
    isValid,
    handleSubmit,
    handleChange,
    handleBlur,
  }) => {
    const rootStore = useStores();
    const { project } = rootStore.projectStore;

    return (
      <Content>
        <TextContainer>
          <Text>{project.trackName}</Text>
        </TextContainer>

        <TextContainer>
          <Text>{project.caseName}</Text>
        </TextContainer>

        <FormikInput
          value={values.name}
          name="name"
          type="text"
          placeholder="Имя"
          error={errors.name}
          touched={touched.name}
          handleChange={handleChange('name')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.description}
          name="description"
          type="text"
          placeholder="Описание проекта"
          error={errors.description}
          touched={touched.description}
          handleChange={handleChange('description')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.auditorium}
          name="auditorium"
          type="text"
          placeholder="Целевая аудитория"
          error={errors.auditorium}
          touched={touched.auditorium}
          handleChange={handleChange('auditorium')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.prototype}
          name="prototype"
          type="text"
          placeholder="Образ проекта"
          error={errors.prototype}
          touched={touched.prototype}
          handleChange={handleChange('prototype')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.economy}
          name="economy"
          type="text"
          placeholder="Unit-экономика"
          error={errors.economy}
          touched={touched.economy}
          handleChange={handleChange('economy')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.marketing}
          name="marketing"
          type="text"
          placeholder="Маркетинг"
          error={errors.marketing}
          touched={touched.marketing}
          handleChange={handleChange('marketing')}
          handleBlur={handleBlur}
        />
        <ButtonsGroup>
          <Button
            type="submit"
            disabled={!isValid}
            onClick={() => {
              handleSubmit();
            }}
          >
            Создать проект
          </Button>
        </ButtonsGroup>
      </Content>
    );
  },
);
