import type {Metadata} from 'next';

import {PaymentFailed} from './PaymentFailed';

export const metadata: Metadata = {
  title: 'Payment Failed',
  description: 'Payment Failed',
};

export default function NewPasswordPage() {
  return <PaymentFailed />;
}
