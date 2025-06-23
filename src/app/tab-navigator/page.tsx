import React from 'react';
import type {Metadata} from 'next';

import {data} from '../../data';
import {TabNavigator} from './TabNavigator';

export const metadata: Metadata = {
  title: 'Tab Navigator',
  description: 'Tab Navigator',
};

export default async function TabNavigatorPage() {
  let transactions = [];
  let users = [];

  try {
    const [transactionsData, usersData] = await Promise.all([
      data.getTransactions(),
      data.getUsers(),
    ]);
    transactions = transactionsData;
    users = usersData;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
  }

  return (
    <TabNavigator
      users={users}
      transactions={transactions}
    />
  );
}
