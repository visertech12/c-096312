import React from 'react';

export const DollarSvg: React.FC = () => {
  return (
    <div style={{width: 34, height: 34}}>
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
        <g
          stroke='#FF8A71'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        >
          <path d='M17 9.667v14.666M20.333 12.333h-5a2.333 2.333 0 1 0 0 4.667h3.334a2.333 2.333 0 0 1 0 4.667H13' />
        </g>
        <defs>
          <clipPath id='a'>
            <path
              fill='#fff'
              d='M9 9h16v16H9z'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
