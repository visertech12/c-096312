import type {Metadata} from 'next';

import {data} from '../../data';
import {Statistics} from './Statistics';

export const metadata: Metadata = {
  title: 'Statistics',
  description: 'Statistics',
};

export default async function Page() {
  let statistics = [];

  try {
    statistics = await data.getStatistics();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
  }

  return <Statistics statistics={statistics} />;
}
