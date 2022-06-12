/* eslint-disable react/jsx-props-no-spreading */
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';
import React from 'react';
import {
  Create,
  CreateProps,
  DateInput,
  ImageField,
  ImageInput,
  required,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { useNavigate } from 'react-router-dom';

export const NewsCreate = (props: CreateProps) => {
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('text', data.text);
    formData.append('file', data.file.rawFile);
    formData.append('published', data.published);

    fetch(`http://localhost:4000/news`, {
      method: 'POST',
      body: formData,
    }).then(() => navigate(-1));
  };

  return (
    <Create {...props} title="Создание новости">
      <SimpleForm onSubmit={onSubmit}>
        <TextInput
          multiline
          fullWidth
          validate={[required('Обязательное поле')]}
          source="title"
          label="Заголовок"
        />
        <RichTextInput
          toolbar={<RichTextInputToolbar size="large" />}
          source="text"
          label="Текст"
          validate={[required('Обязательное поле')]}
        />
        <ImageInput source="file" label="Фотография" accept="image/*">
          <ImageField source="src" title="name" />
        </ImageInput>
        <DateInput
          source="published"
          label="Дата публикации"
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Create>
  );
};
