/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { colors } from '../styles/colors/colors';

export const BackArrow = (props: any) => {
  return (
    <svg
      width={12}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.826 17.655c.237.223.538.345.893.345.71 0 1.281-.528 1.281-1.197 0-.335-.15-.64-.398-.873L3.068 8.99l7.534-6.92c.247-.233.398-.548.398-.873C11 .527 10.43 0 9.72 0c-.356 0-.657.122-.894.345L.452 8.056A1.266 1.266 0 0 0 0 9c0 .355.15.66.452.933l8.374 7.722Z"
        fill={colors.blue[1]}
      />
    </svg>
  );
};
