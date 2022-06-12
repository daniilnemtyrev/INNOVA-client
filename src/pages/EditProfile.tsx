import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { EditProfileFormik } from '../components/EditProfile/ui/edit-profile-formik';
import { Content, Main } from '../styles/general';
import { PageHeader } from '../components/general/ui/page-header';

const EditProfile: FC = () => {
  return (
    <Content>
      <PageHeader label="Редактирование профиля" />
      <Main>
        <EditProfileFormik />
      </Main>
    </Content>
  );
};

export default observer(EditProfile);
