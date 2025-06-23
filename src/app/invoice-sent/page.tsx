import type {Metadata} from 'next';

import {InvoiceSent} from './InvoiceSent';

export const metadata: Metadata = {
  title: 'Invoice Sent',
  description: 'Invoice Sent',
};

export default function InvoiceSentPage() {
  return <InvoiceSent />;
}
