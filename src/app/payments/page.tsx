import type {Metadata} from 'next';

import {Payments} from './Payments';

export const metadata: Metadata = {
  title: 'Payments',
  description: 'Payments',
};

export default function Page() {
  return <Payments />;
}
