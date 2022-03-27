import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import { Container, Content } from '../styles/auth.module.';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ValidDiv } from '../components/UI/Valid';
import LinkButton from '../components/LinkButton';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const { store } = useContext(Context);

  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле email обязательно')
      .email('Некорректный email'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле password обязательно'),
  });

  return (
    <Container>
      <Content>
        <Formik
          initialValues={{
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
            <>
              <Input
                value={values.email}
                name={'email'}
                type={'text'}
                placeholder="Email"
                onChange={e => {
                  setEmail(e.target.value);
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />
              <Input
                value={values.password}
                onBlur={handleBlur}
                name={'password'}
                type="password"
                placeholder="Password"
                onChange={e => {
                  setPassword(e.target.value);
                  handleChange(e);
                }}
              />
              {touched.email && errors.email && (
                <ValidDiv>{errors.email}</ValidDiv>
              )}
              {touched.password && errors.password && (
                <ValidDiv>{errors.password}</ValidDiv>
              )}

              <LinkButton
                to="/chat"
                type={'submit'}
                disabled={!isValid}
                onClick={() => {
                  store.login(email, name, password);
                  handleSubmit();
                }}
              >
                Вход
              </LinkButton>
              <LinkButton
                onClick={() => {
                  store.setSend(false);
                }}
                to="/menu"
              >
                Меню
              </LinkButton>
            </>
          )}
        </Formik>
        {store.IsSend && !store.IsAuth && (
          <ValidDiv>Неверный логин или пароль</ValidDiv>
        )}
      </Content>
    </Container>
  );
};

export default observer(Login);
