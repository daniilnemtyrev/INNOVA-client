import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import $api from '../../http';
import { API } from '../../pages/Admin';
import { ISponsor } from './styles';

export const Sponsors = () => {
  const [sponsors, setSponsors] = useState<ISponsor[]>([]);

  const getSponsors = async () => {
    const response = await $api.get('/sponsors');
    setSponsors(response.data.data);
  };

  useEffect(() => {
    getSponsors();
  }, []);

  return (
    <Carousel>
      {sponsors.map(({ link, id }) => (
        <div key={id}>
          <img
            src={`${API}/sponsors/${id}/image`}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      ))}
    </Carousel>
  );
};
