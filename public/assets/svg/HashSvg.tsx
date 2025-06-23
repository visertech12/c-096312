import React from 'react';

export const HashSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={34}
      height={34}
      fill='none'
    >
      <rect
        width={34}
        height={34}
        fill='#FFD9C3'
        rx={6}
      />
      <path
        stroke='#FF8A71'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M11.667 15h10.666M11.667 19h10.666M15.667 11l-1.334 12M19.667 11l-1.334 12'
      />
    </svg>
  );
};
