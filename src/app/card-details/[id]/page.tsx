import type {Metadata} from 'next';

import {CardDetails} from './CardDetails';

export const metadata: Metadata = {
  title: 'Card Details',
  description: 'Card Details',
};

type Params = {
  params: Promise<{id: string}>;
};

export default async function CardDetailsPage({params}: Params) {
  const cardId = (await params).id;

  return <CardDetails cardId={cardId} />;
}
