import type {Metadata} from 'next';

import {NewPassword} from './NewPassword';

export const metadata: Metadata = {
  title: 'New Password',
  description: 'New Password',
};

export default function NewPasswordPage() {
  return <NewPassword />;
}
