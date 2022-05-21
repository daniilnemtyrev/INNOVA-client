import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Header } from '../components/general/header/header';
import { colors } from '../styles/colors/colors';
import { EditProfileFormik } from '../components/EditProfile/ui/edit-profile-formik';
import { Main } from '../styles/general';
import { Sidebar } from '../components/general/sidebar/sidebar';

const EditProfile: FC = () => {
  return (
    <Main>
      <EditProfileFormik />
    </Main>
  );
};

export default observer(EditProfile);
