import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import { Container, Content } from '../styles/auth.module.';
import { Input } from '../components/UI/Input';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ValidDiv } from '../components/UI/Valid';
import LinkButton from '../components/LinkButton';

const Regist: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const { store } = useContext(Context);

  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле email обязательно')
      .email('Некорректный email')
      .max(20, 'Покороче email плз'),
    name: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле name обязательно')
      .max(20, 'Покороче имя плз'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле password обязательно')
      .min(4, 'Слишком короткий пароль')
      .max(20, 'Покороче пароль плз'),
  });

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validateOnBlur
        validateOnMount
        validateOnChange
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
        }) => (
          <Content>
            <Input
              value={values.email}
              name={'email'}
              onBlur={handleBlur}
              onChange={e => {
                setEmail(e.target.value);
                handleChange(e);
              }}
              required
              type={'text'}
              placeholder="Email"
            />
            <Input
              name={'name'}
              required
              type={'text'}
              value={values.name}
              placeholder="Name"
              onBlur={handleBlur}
              onChange={e => {
                setName(e.target.value);
                handleChange(e);
              }}
            />
            <Input
              name={'password'}
              onBlur={handleBlur}
              onChange={e => {
                setPassword(e.target.value);
                handleChange(e);
              }}
              required
              type={'password'}
              value={values.password}
              placeholder="Password"
            />
            {touched.email && errors.email && (
              <ValidDiv>{errors.email}</ValidDiv>
            )}
            {touched.name && errors.name && <ValidDiv>{errors.name}</ValidDiv>}
            {touched.password && errors.password && (
              <ValidDiv>{errors.password}</ValidDiv>
            )}
            <LinkButton
              to="/chat"
              type={'submit'}
              disabled={!isValid}
              onClick={() => {
                store.registration(email, name, password);
                handleSubmit();
              }}
            >
              Зарегестрироваться
            </LinkButton>
            <LinkButton
              onClick={() => {
                store.setSend(false);
              }}
              to="/menu"
            >
              Меню
            </LinkButton>
          </Content>
        )}
      </Formik>
    </Container>
  );
};

export default observer(Regist);
