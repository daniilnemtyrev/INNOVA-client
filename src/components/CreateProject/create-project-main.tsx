import React from 'react';
import styled from 'styled-components';
import { Main } from '../../styles/general';
import { CreateProjectFormik } from './form/create-project-formik';

export const CreateProjectMain = () => {
  return (
    <Main>
      <CreateProjectFormik />
    </Main>
  );
};
