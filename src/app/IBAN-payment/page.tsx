import type {Metadata} from 'next';

import {IBANPayment} from './IBANPayment';

export const metadata: Metadata = {
  title: 'IBAN Payment',
  description: 'IBAN Payment',
};

export default function IBANPaymentPage() {
  return <IBANPayment />;
}
