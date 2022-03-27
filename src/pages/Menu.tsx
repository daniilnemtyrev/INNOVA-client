import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import { Container, Content } from '../styles/auth.module.';
import { Button } from '../components/UI/Button';
import { ButtonNav } from '../components/UI/ButtonNav';
import LinkButton from '../components/LinkButton';

const Menu: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);
  return (
    <Container>
      <Content>
        <ButtonNav>
          <LinkButton to="/login">Логин</LinkButton>
          <LinkButton to="/registration">Регистрация</LinkButton>
        </ButtonNav>
      </Content>
    </Container>
  );
};

export default observer(Menu);
