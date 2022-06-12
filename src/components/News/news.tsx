import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';
import { ToastVariant } from '../../enums/toast-enum';
import $api from '../../http';
import { Toast } from '../Toasts/toast-emiter';
import { NewsItem } from './news-item';
import { NewsItemI } from './styles';

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 120px);
  background: transparent;
`;
const Title = styled.h3`
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.575rem;
  color: white;
  span {
    border-bottom: 3px solid #036fd5;
  }
`;

const NewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 20px;
  gap: 22px;
`;

export const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNews = async () => {
    try {
      setIsLoading(true);
      const response = await $api.get('news');
      setNews(response.data.data);
    } catch {
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
    <Main>
      <Title>
        <span>Новости</span>
      </Title>

      <NewsWrapper>
        {isLoading ? (
          <ClipLoader color="blue" loading={isLoading} size={100} />
        ) : (
          news.map((el: NewsItemI) => <NewsItem key={el.id} {...el} />)
        )}
      </NewsWrapper>
    </Main>
  );
};
