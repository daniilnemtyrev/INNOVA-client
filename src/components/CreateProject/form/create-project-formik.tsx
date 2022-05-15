/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { CreateProjectForm } from './create-project-form';
import { useStores } from '../../../hooks/useStore';
import { projectValidSchema } from '../../../shared/schemas/project-valid-schema';

export interface ICreateProjectForm {
  name: string;
  description: string;
  auditorium: string;
  prototype: string;
  economy: string;
  marketing: string;
}

export const CreateProjectFormik = () => {
  const { rootStore } = useStores();
  const navigate = useNavigate();
  const { projectStore } = rootStore;
  const { userStore } = rootStore;
  const { project } = rootStore.projectStore;
  const initialValues: ICreateProjectForm = {
    name: '',
    description: '',
    auditorium: '',
    prototype: '',
    economy: '',
    marketing: '',
  };

  const createProject = async (values: ICreateProjectForm) => {
    const data = {
      ...values,
      userId: userStore.user.id,
      trackId: project.trackId,
      trackName: project.trackName,
      trackDescription: project.trackDescription,
      caseId: project.caseId,
      caseName: project.caseName,
      caseDescription: project.caseDescription,
    };
    try {
      await projectStore.createProject(data);
      navigate('/profile');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validateOnMount
      validateOnChange
      validationSchema={projectValidSchema}
      onSubmit={values => createProject(values)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      component={formikProps => <CreateProjectForm {...formikProps} />}
    />
  );
};
