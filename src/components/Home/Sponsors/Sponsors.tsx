/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

import ClipLoader from 'react-spinners/ClipLoader';
import $api from '../../../http';
import { API } from '../../../pages/Admin';
import { ISponsor } from './styles';
import { Title } from '../../../styles/general';
import { ToastVariant } from '../../../enums/toast-enum';
import { Toast } from '../../Toasts/toast-emiter';

const Wrapper = styled.div`
  margin: 0 40px 40px 40px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  object-fit: contain;
`;

export const Sponsors = () => {
  const [sponsors, setSponsors] = useState<ISponsor[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSponsors = async () => {
    try {
      setIsLoading(true);
      const response = await $api.get('/sponsors');
      setSponsors(response.data.data);
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
    getSponsors();
  }, []);

  return (
    <Wrapper>
      <Title>
        <span>При поддержке</span>
      </Title>
      {isLoading ? (
        <LoaderWrapper>
          <ClipLoader color="blue" loading={isLoading} size={100} />
        </LoaderWrapper>
      ) : (
        <Carousel itemsToShow={3} enableSwipe={false}>
          {sponsors.map(({ link, id }) => (
            <a key={id} href={link}>
              <Image
                src={`${API}/sponsors/${id}/image`}
                alt="logo"
                width={220}
                height={200}
                draggable={false}
              />
            </a>
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};
