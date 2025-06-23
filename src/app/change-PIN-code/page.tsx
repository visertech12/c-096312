import type {Metadata} from 'next';

import {ChangePINCode} from './ChangePINCode';

export const metadata: Metadata = {
  title: 'Change PIN Code',
  description: 'Change PIN Code',
};

export default function ChangePINCodePage() {
  return <ChangePINCode />;
}
