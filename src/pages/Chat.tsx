import React, { useContext, useEffect, useMemo, useState } from 'react';
import * as uuid from 'uuid';
import io from 'socket.io-client';
import {
  Container,
  Content,
  Card,
  MyMessage,
  OtherMessage,
  Send,
  OtherMessageText,
  OtherMessageSpan,
} from '../styles/chat';
import { Message, Payload } from '../interfaces/IChat';
import { Context } from '..';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import { observer } from 'mobx-react-lite';
import { ButtonNav } from '../components/UI/ButtonNav';

const socket = io('ws://localhost:4000');

const Chat: React.FC = () => {
  const { store } = useContext(Context);
  const [title] = useState('ЧАЧАЧАТ');
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('msgToClient', (message: Payload) => {
      receivedMessage(message);
    });
  }, []);

  function receivedMessage(message: Payload) {
    const newMessage: Message = {
      userId: store.user.id,
      name: message.name,
      text: message.text,
    };
    setMessages(messages => [...messages, newMessage]);
  }

  function validateInput() {
    return text.length > 0;
  }

  function sendMessage() {
    if (validateInput()) {
      const message: Payload = {
        name: store.user.name,
        text,
      };
      socket.emit('msgToServer', message);
      setText('');
    }
  }

  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <ButtonNav>
          <h4>{store.user.name}</h4>
          <Button
            onClick={() => {
              store.logout(messages);
              //setMessages([]);
            }}
          >
            Выйти
          </Button>
        </ButtonNav>
        <Card>
          <ul>
            {messages.map(message => {
              if (message.name === store.user.name) {
                return (
                  <MyMessage key={message.text}>
                    <p>{message.text}</p>
                  </MyMessage>
                );
              }

              return (
                <OtherMessage key={message.text}>
                  <OtherMessageSpan>{message.name}</OtherMessageSpan>
                  <OtherMessageText>
                    <p>{message.text}</p>
                  </OtherMessageText>
                </OtherMessage>
              );
            })}
          </ul>
        </Card>
        <Send>
          <Input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter message..."
          />
          <Button type="button" onClick={() => sendMessage()}>
            Send
          </Button>
        </Send>
      </Content>
    </Container>
  );
};

export default observer(Chat);
