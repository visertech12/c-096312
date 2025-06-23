'use client';

import React from 'react';
import Link from 'next/link';
import {UrlObject} from 'url';

type Props = {
  href?: string | UrlObject;
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  colorScheme?: 'primary' | 'secondary';
  containerStyle?: React.CSSProperties;
};

export const Button: React.FC<Props> = ({
  href,
  label,
  style,
  onClick,
  containerStyle,
  colorScheme = 'primary',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick && onClick();
  };

  if (href) {
    return (
      <div style={{...containerStyle}}>
        <Link
          href={href ?? '#'}
          style={{
            width: '100%',
            height: 40,
            borderRadius: 10,
            color:
              colorScheme === 'primary'
                ? 'var(--white-color)'
                : 'var(--main-dark)',
            textTransform: 'capitalize',
            fontWeight: 'var(--fw-semibold)',
            background:
              colorScheme === 'primary' ? 'var(--main-dark)' : '#FFD9C3',
            ...style,
          }}
          className='flex-center t16'
        >
          {label}
        </Link>
      </div>
    );
  }

  return (
    <div style={{...containerStyle}}>
      <Link
        href={href ?? '#'}
        onClick={handleClick}
        style={{
          width: '100%',
          height: 40,
          borderRadius: 10,
          color:
            colorScheme === 'primary'
              ? 'var(--white-color)'
              : 'var(--main-dark)',
          textTransform: 'capitalize',
          fontWeight: 'var(--fw-semibold)',
          background:
            colorScheme === 'primary' ? 'var(--main-dark)' : '#FFD9C3',
          ...style,
        }}
        className='flex-center t16'
      >
        {label}
      </Link>
    </div>
  );
};
