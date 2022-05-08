import React from 'react';
import { Formik } from 'formik';
import { CreateProjectForm } from './create-project-form';
import { useStores } from '../../../hooks/useStore';
import { projectValidSchema } from '../../../shared/schemas/project-valid-schema';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const projectStore = rootStore.projectStore;
  const userStore = rootStore.userStore;
  const project = rootStore.projectStore.project;
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
      history.push('/profile');
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
      component={formikProps => <CreateProjectForm {...formikProps} />}
    />
  );
};
