import React from 'react';
import { colors } from '../styles/colors/colors';

export const UserIcon = (props: any) => {
  return (
    <svg
      height={250}
      viewBox="0 0 6.35 6.35"
      width={150}
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginTop: -60 }}
      {...props}
    >
      <path
        d="M2.117 3.44C1.323 3.44.53 3.969.53 4.762v.588c0 .283.194.47.53.47H5.29c.333 0 .53-.203.53-.47v-.588c0-.793-.794-1.322-1.588-1.322Z"
        width={60}
        height={60}
        style={{
          color: '#000',
          fill: colors.blue[3],
        }}
      />
      <path
        d="M3.166.53a1.26 1.26 0 0 0-1.248 1.256 1.26 1.26 0 0 0 1.257 1.257 1.26 1.26 0 0 0 1.257-1.257A1.261 1.261 0 0 0 3.167.53a.265.265 0 0 0-.001 0z"
        width={125}
        height={56}
        style={{
          color: '#000',
          fill: colors.blue[3],
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};
