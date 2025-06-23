import type {Metadata} from 'next';

import {OpenNewCard} from './OpenNewCard';

export const metadata: Metadata = {
  title: 'Open New Card',
  description: 'Open New Card',
};

export default function Page() {
  return <OpenNewCard />;
}
