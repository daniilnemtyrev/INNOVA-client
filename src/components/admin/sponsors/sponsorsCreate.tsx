/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Create,
  CreateProps,
  ImageField,
  ImageInput,
  required,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const SponsorsCreate = (props: CreateProps) => {
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    const formData = new FormData();
    formData.append('link', data.link);
    formData.append('file', data.file.rawFile);

    fetch(`http://localhost:4000/sponsors`, {
      method: 'POST',
      body: formData,
    }).then(() => navigate(-1));
  };

  return (
    <Create {...props} title="Создание спонсора">
      <SimpleForm onSubmit={onSubmit}>
        <TextInput
          multiline
          fullWidth
          validate={[required('Обязательное поле')]}
          source="link"
          label="Ссылка"
        />
        <ImageInput source="file" label="Логотип" accept="image/*">
          <ImageField source="src" title="name" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};
