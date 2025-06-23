import React from 'react';

type Props = {
  active: boolean;
};

export const Switcher: React.FC<Props> = ({active}) => {
  return (
    <div
      style={{
        width: 41,
        backgroundColor: active ? '#55ACEE' : 'lightgray',
        borderRadius: 12,
        padding: '1.5px 1.5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: active ? 'flex-end' : 'flex-start',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: 20.9,
          height: 20.9,
          backgroundColor: '#FFFFFF',
          borderRadius: 11,
          alignSelf: 'center',
        }}
      />
    </div>
  );
};
