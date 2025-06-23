import React from 'react';
import type {Metadata} from 'next';

import {data} from '../../../data';
import {TransactionDetails} from './TransactionDetails';

import type {TransactionType} from '../../../types';

export const metadata: Metadata = {
  title: 'Transaction Details',
  description: 'Transaction Details',
};

type Params = {
  params: Promise<{id: string}>;
};

export default async function TransactionDetailsPage({params}: Params) {
  const transactionId = (await params).id;

  let detailsArray: TransactionType[] = [];

  try {
    detailsArray = await data.getTransactions();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
  }

  return (
    <TransactionDetails
      detailsArray={detailsArray}
      transactionId={transactionId}
    />
  );
}
