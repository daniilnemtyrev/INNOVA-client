import React from 'react';

export const Line = () => {
  return (
    <svg width={160} height={2} fill="none">
      <path stroke="url(#a)" strokeWidth={0.946} d="M.25 1.231h203.354" />
      <defs>
        <linearGradient
          id="a"
          x1={0.25}
          y1={1.704}
          x2={203.604}
          y2={1.704}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};
