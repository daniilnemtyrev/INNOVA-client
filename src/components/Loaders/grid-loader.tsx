import React from 'react';
import ContentLoader from 'react-content-loader';

export const GridLoader = () => (
  <ContentLoader
    width={680}
    height={700}
    viewBox="0 0 680 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="12" y="18" rx="2" ry="2" width="200" height="200" />
    <rect x="240" y="17" rx="2" ry="2" width="200" height="200" />
    <rect x="467" y="16" rx="2" ry="2" width="200" height="200" />
    <rect x="12" y="253" rx="2" ry="2" width="200" height="200" />
    <rect x="240" y="251" rx="2" ry="2" width="200" height="200" />
    <rect x="468" y="259" rx="2" ry="2" width="200" height="200" />
    <rect x="12" y="478" rx="2" ry="2" width="200" height="200" />
    <rect x="240" y="476" rx="2" ry="2" width="200" height="200" />
    <rect x="468" y="474" rx="2" ry="2" width="200" height="200" />
  </ContentLoader>
);
