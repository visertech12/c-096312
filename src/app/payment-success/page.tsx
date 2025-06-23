import type {Metadata} from 'next';

import {PaymentSuccess} from './PaymentSuccess';

export const metadata: Metadata = {
  title: 'Payment Success',
  description: 'Payment Success',
};

export default function PaymentSuccessPage() {
  return <PaymentSuccess />;
}
