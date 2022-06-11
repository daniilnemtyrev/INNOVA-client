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
  RichTextField,
} from 'react-admin';

const Image = () => {
  const record = useRecordContext();

  return (
    <img
      width={100}
      height={100}
      style={{ width: 100, height: 100, objectFit: 'contain' }}
      src={`http://localhost:4000/news/${record?.id}/image`}
      alt="sdk"
    />
  );
};

export const NewsList = (props: ListProps) => {
  return (
    <List {...props} title="Новости">
      <Datagrid title="Новости">
        <TextField source="id" />
        <TextField source="title" label="Заголовок" />
        <RichTextField
          sx={{
            display: 'block',
            height: 100,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          stripTags
          source="text"
          label="Описание"
        />
        <WrapperField label="Изображение">
          <Image />
        </WrapperField>
        <TextField source="published" label="Дата публикации" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};
