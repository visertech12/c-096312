import React from 'react';

type Props = {
  title: string;
  rightComponent?: React.ReactNode;
  containerStyle?: React.CSSProperties;
};

export const BlockHeading: React.FC<Props> = ({
  title,
  containerStyle,
  rightComponent,
}) => {
  return (
    <div
      style={{...containerStyle}}
      className='row-c-sb'
    >
      <h5>{title}</h5>
      {rightComponent}
    </div>
  );
};
