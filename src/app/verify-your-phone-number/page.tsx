import type {Metadata} from 'next';

import {VerifyYourPhoneNumber} from './VerifyYourPhoneNumber';

export const metadata: Metadata = {
  title: 'Verify Your Phone Number',
  description: 'Verify Your Phone Number',
};

export default function Page() {
  return <VerifyYourPhoneNumber />;
}
