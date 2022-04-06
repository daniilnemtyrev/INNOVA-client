import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Message, Payload } from '../interfaces/IChat';

import { observer } from 'mobx-react-lite';
import { ButtonNav } from '../components/UI/ButtonNav';
import { Button } from '../components/UI/buttons/Button';
import { InputBase } from '../components/UI/inputs/input-base';
import styled from 'styled-components';
import { useStores } from '../hooks/useStore';

const socket = io('ws://localhost:4000');

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(237, 238, 240, 1);
  font-family: 'Roboto Slab', serif;
`;

export const Content = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 90%;
  width: 100%;
  max-width: 450px;
  background: #fff;
  align-items: center;
  box-shadow: 0 0 2px rgba(194, 195, 197);
  border-radius: 9px;
`;

export const Card = styled.div`
  margin-top: 16px;
  height: 100%;
  box-shadow: 0 0 2px rgba(194, 195, 197);
  border-radius: 9px;
  width: 90%;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
  }

  ::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 6px;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Send = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 16px;
  height: 62px;
  width: 100%;
  box-shadow: 0 0 2px rgba(194, 195, 197);
  background-color: #fafbfc;
`;

export const MyMessage = styled.li`
  padding: 8px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  width: 150px;
  background: rgba(194, 195, 197);
  color: #000;
  border-radius: 15px;
  margin-top: 4px;
  word-break: break-all;
  text-align: left;
`;

export const OtherMessage = styled.li`
  margin-top: 4px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 150px;
  word-break: break-all;
  text-align: left;
`;

export const OtherMessageText = styled.div`
  max-width: 150px;
  background: #f1f1f1;
  border-radius: 9px;
  align-items: flex-start;
  display: flex;
  padding: 8px;
  word-break: break-all;
  text-align: left;
`;

export const OtherMessageSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Chat: React.FC = () => {
  const { rootStore } = useStores();
  const userStore = rootStore.userStore;
  const authStore = rootStore.authStore;
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
      userId: userStore.user.id,
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
        name: userStore.user.name,
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
          <h4>{userStore.user.name}</h4>
          <Button
            onClick={() => {
              // authStore.logout(messages);
              //setMessages([]);
            }}
          >
            Выйти
          </Button>
        </ButtonNav>
        <Card>
          <ul>
            {messages.map(message => {
              if (message.name === userStore.user.name) {
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
          <InputBase
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
