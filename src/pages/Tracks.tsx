import React from 'react';
import { PageHeader } from '../components/general/ui/page-header';
import { TracksMain } from '../components/Tracks/tracks-main';
import { Content } from '../styles/general';

export const Tracks = () => {
  return (
    <Content>
      <PageHeader label="Выберите проектный трек" />
      <TracksMain />
    </Content>
  );
};