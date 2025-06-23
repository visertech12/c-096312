import type {Metadata} from 'next';

import {CardMenu} from './CardMenu';

export const metadata: Metadata = {
  title: 'Card Menu',
  description: 'Card Menu',
};

export default function CardMenuPage() {
  return <CardMenu />;
}
