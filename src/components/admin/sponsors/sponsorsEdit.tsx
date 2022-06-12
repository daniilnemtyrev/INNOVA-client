/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Edit,
  EditProps,
  ImageField,
  ImageInput,
  required,
  SimpleForm,
  TextInput,
  useRecordContext,
  WrapperField,
} from 'react-admin';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Image = () => {
  const record = useRecordContext();
  return (
    <img
      width={150}
      height={150}
      src={`http://localhost:4000/sponsors/${record?.id}/image`}
      alt="sdk"
    />
  );
};

export const SponsorsEdit = (props: EditProps) => {
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    const formData = new FormData();
    formData.append('link', data.link);
    if (data.file) formData.append('file', data.file.rawFile);

    fetch(`http://localhost:4000/sponsors/${data.id}`, {
      method: 'PATCH',
      body: formData,
    }).then(() => navigate(-1));
  };

  return (
    <Edit {...props} resource="sponsors" redirect="list">
      <SimpleForm onSubmit={onSubmit}>
        <TextInput disabled source="id" />
        <TextInput
          fullWidth
          source="link"
          validate={[required('Обязательное поле')]}
        />
        <WrapperField label="Изображение">
          <Image />
        </WrapperField>
        <ImageInput source="file" label="Фотография" accept="image/*">
          <ImageField fullWidth source="src" title="name" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};
