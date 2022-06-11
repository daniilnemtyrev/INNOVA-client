/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  DateInput,
  Edit,
  EditProps,
  ImageField,
  ImageInput,
  maxValue,
  required,
  SimpleForm,
  TextInput,
  useRecordContext,
  WrapperField,
} from 'react-admin';
import { FieldValues } from 'react-hook-form';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';
import { useNavigate } from 'react-router-dom';

const Image = () => {
  const record = useRecordContext();
  return (
    <img
      width={150}
      height={150}
      src={`http://localhost:4000/news/${record?.id}/image`}
      alt="sdk"
    />
  );
};

export const NewsEdit = (props: EditProps) => {
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('text', data.text);
    if (data.file) formData.append('file', data.file.rawFile);
    formData.append('published', data.published);

    fetch(`http://localhost:4000/news/${data.id}`, {
      method: 'PATCH',
      body: formData,
    }).then(() => navigate(-1));
  };

  return (
    <Edit {...props} resource="news" redirect="list">
      <SimpleForm onSubmit={onSubmit}>
        <TextInput disabled source="id" />
        <TextInput
          multiline
          fullWidth
          source="title"
          validate={[
            required('Обязательное поле'),
            maxValue(80, 'Не должно превышать 80 символов'),
          ]}
        />
        <RichTextInput
          toolbar={<RichTextInputToolbar size="large" />}
          source="text"
          label="Текст"
          validate={[required('Обязательное поле')]}
        />
        <WrapperField label="Изображение">
          <Image />
        </WrapperField>
        <ImageInput source="file" label="Фотография" accept="image/*">
          <ImageField source="src" title="name" />
        </ImageInput>
        <DateInput source="published" label="Дата публикации" />
      </SimpleForm>
    </Edit>
  );
};
