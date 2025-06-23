import type {Metadata} from 'next';

import {SignUpAccountCreated} from './SignUpAccountCreated';

export const metadata: Metadata = {
  title: 'Sign Up Account Created',
  description: 'Sign Up Account Created',
};

export default function Page() {
  return <SignUpAccountCreated />;
}
