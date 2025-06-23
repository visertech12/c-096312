import type {Metadata} from 'next';

import {OpenDeposit} from './OpenDeposit';

export const metadata: Metadata = {
  title: 'Open Deposit',
  description: 'Open Deposit',
};

export default function Page() {
  return <OpenDeposit />;
}
