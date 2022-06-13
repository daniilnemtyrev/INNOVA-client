import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';
import { ToastVariant } from '../../../enums/toast-enum';
import $api from '../../../http';
import { API } from '../../../pages/Admin';
import { Toast } from '../../Toasts/toast-emiter';
import { NewsItemI } from '../styles';

const Wrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 40px 15px 60px 15px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'Nunito', sans-serif;
  text-align: center;
  color: white;
  font-size: 2.4rem;
  padding-bottom: 2.5rem;

  span {
    border-bottom: 1px solid #add8e6;
  }
`;

const Body = styled.div`
  max-width: 1140px;
  width: 100%;
  color: white;
  font-family: 'Nunito', sans-serif;
  a {
    color: #3490dc;
  }
`;

const Image = styled.img`
  margin-top: 40px;
  max-width: 100%;
  height: auto;
`;

const ClipWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SelectedNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState({} as NewsItemI);
  const [isLoading, setIsLoading] = useState(false);

  const getNews = async () => {
    try {
      setIsLoading(true);
      const response = await $api.get(`news/${id}`);
      setNews(response.data);
    } catch (error) {
      Toast({
        type: ToastVariant.ERROR,
        text: 'Упс... Что-то пошло не так',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Wrapper>
      <Title>
        <span>{news.title}</span>
      </Title>
      {isLoading ? (
        <ClipWrapper>
          <ClipLoader color="blue" loading={isLoading} size={100} />
        </ClipWrapper>
      ) : (
        <>
          <Body dangerouslySetInnerHTML={{ __html: news.text }} />
          <Image src={`${API}/news/${id}/image`} alt="news logo" />
        </>
      )}
    </Wrapper>
  );
};
