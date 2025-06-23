import type {Metadata} from 'next';

import {ConfirmationCode} from './ConfirmationCode';

export const metadata: Metadata = {
  title: 'Confirmation Code',
  description: 'Confirmation Code',
};

export default function ConfirmationCodePage() {
  return <ConfirmationCode />;
}
