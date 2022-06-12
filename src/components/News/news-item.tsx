import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../pages/Admin';
import { NewsItemI } from './styles';

const Wrapper = styled.div`
  width: 288px;
  height: 232px;
  background-color: white;
`;

const ImageWrapper = styled.div`
  padding: 0.25rem;
  background-color: #f8fafc;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Text = styled.p`
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  text-align: center;
  font-size: 1.125rem;
`;

export const NewsItem = ({ id, title }: NewsItemI) => {
  return (
    <Link to={`${id}`}>
      <Wrapper>
        <ImageWrapper>
          <Image src={`${API}/news/${id}/image`} alt="news logo" />
        </ImageWrapper>
        <Text>{title}</Text>
      </Wrapper>
    </Link>
  );
};
