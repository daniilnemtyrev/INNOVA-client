/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteWithConfirmButton,
  ListProps,
  useRecordContext,
  WrapperField,
  UrlField,
} from 'react-admin';

const Image = () => {
  const record = useRecordContext();

  return (
    <img
      width={100}
      height={100}
      style={{ width: 100, height: 100, objectFit: 'contain' }}
      src={`http://localhost:4000/sponsors/${record?.id}/image`}
      alt="sdk"
    />
  );
};

export const SponsorsList = (props: ListProps) => {
  return (
    <List {...props} title="Спонсоры">
      <Datagrid title="Спонсоры">
        <TextField source="id" />
        <UrlField source="link" label="Ссылка" />
        <WrapperField label="Логотип">
          <Image />
        </WrapperField>
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};
