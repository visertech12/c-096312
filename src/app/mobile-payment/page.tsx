import type {Metadata} from 'next';

import {MobilePayment} from './MobilePayment';

export const metadata: Metadata = {
  title: 'Mobile Payment',
  description: 'Mobile Payment',
};

export default function MobilePaymentPage() {
  return <MobilePayment />;
}
