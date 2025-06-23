import type {Metadata} from 'next';

import {CreateInvoice} from './CreateInvoice';

export const metadata: Metadata = {
  title: 'Create Invoice',
  description: 'Create Invoice',
};

export default function CreateInvoicePage() {
  return <CreateInvoice />;
}
