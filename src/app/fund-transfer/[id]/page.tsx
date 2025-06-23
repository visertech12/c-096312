import React from 'react';
import type {Metadata} from 'next';
import {data} from '../../../data';
import {FundTransfer} from './FundTransfer';

export const metadata: Metadata = {
  title: 'Fund Transfer',
  description: 'Fund Transfer',
};

export default async function FundTransferPage({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  let users = [];
  const userId = (await params).id;
  try {
    const [usersData] = await Promise.all([data.getUsers()]);
    users = usersData;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
  }
  return (
    <FundTransfer
      id={userId}
      users={users}
    />
  );
}
