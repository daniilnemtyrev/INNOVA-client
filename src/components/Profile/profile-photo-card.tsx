import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  grid-column: 1/2;
  grid-row: 1/3;
  background-color: ${colors.grey[6]};
  margin-right: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const ImageInput = styled.input`
  display: none;
`;

const StyledImageInput = styled.button<{ imageExist: string }>`
  border: none;
  box-shadow: none;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${colors.white[0]};
  margin-bottom: 20px;
  opacity: ${props => (props.imageExist ? 0 : 1)};
`;

const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ProfilePhotoCard = observer(() => {
  const [inputValue, setInputValue] = useState('');
  const rootStore = useStores();
  const { userStore } = rootStore;
  const fileInput = useRef<any>();

  const handleClick = (e: any) => {
    fileInput.current.click();
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData();
    setInputValue('');
    data.append('file', fileInput.current.files[0]);
    if (userStore.user.id) data.append('id', userStore.user.id.toString());
    await userStore.setImage(data);
  };

  return (
    <Content>
      <Form onSubmit={e => onSubmit(e)}>
        <ImageContainer>
          <StyledImageInput
            imageExist={userStore.user.imagePath}
            onClick={handleClick}
          />
          <ImageInput
            ref={fileInput}
            type="file"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          {userStore.user.imagePath && (
            <UserIcon
              src={`http://localhost:4000/users/${userStore.user.id}/image`}
            />
          )}
        </ImageContainer>

        {inputValue && <Button type="submit">Загрузить</Button>}
      </Form>
    </Content>
  );
});
