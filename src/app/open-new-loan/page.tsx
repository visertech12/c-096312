import type {Metadata} from 'next';

import {OpenNewLoan} from './OpenNewLoan';

export const metadata: Metadata = {
  title: 'Open New Loan',
  description: 'Open New Loan',
};

export default function Page() {
  return <OpenNewLoan />;
}
