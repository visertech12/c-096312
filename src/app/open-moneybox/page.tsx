import type {Metadata} from 'next';

import {OpenMoneybox} from './OpenMoneybox';

export const metadata: Metadata = {
  title: 'Open Moneybox',
  description: 'Open Moneybox',
};

export default function Page() {
  return <OpenMoneybox />;
}
