import type {Metadata} from 'next';

import {TopUpPayment} from './TopUpPayment';

export const metadata: Metadata = {
  title: 'Top Up Payment',
  description: 'Top Up Payment',
};

export default function Page() {
  return <TopUpPayment />;
}
