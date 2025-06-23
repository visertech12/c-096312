import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {Routes} from '../routes';
import {TransactionType} from '../types';

type Props = {
  isLast?: boolean;
  transaction: TransactionType;
};

export const TransactionItem: React.FC<Props> = ({transaction, isLast}) => {
  return (
    <Link
      style={{
        gap: 14,
        marginBottom: isLast ? 0 : 6,
        backgroundColor: '#FFF7F2',
        borderRadius: 10,
        padding: 10,
      }}
      href={`${Routes.TRANSACTION_DETAILS}/${transaction.id}`}
      className='row-c clickable'
    >
      <Image
        src={transaction.icon}
        alt='icon'
        width={40}
        height={40}
      />
      <div style={{marginRight: 'auto'}}>
        <h6
          style={{lineHeight: 1.2}}
          className='number-of-lines-1'
        >
          {transaction.name}
        </h6>
        <span className='t12 number-of-lines-1'>{transaction.name}</span>
      </div>
      <h6
        style={{
          color:
            transaction.direction === 'in' ? '#55ACEE' : 'var(--main-dark)',
        }}
      >
        {transaction.direction === 'in' ? '+' : '-'} {transaction.amount}
      </h6>
    </Link>
  );
};
