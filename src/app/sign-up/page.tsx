import React from 'react';
import type {Metadata} from 'next';

import {SignUp} from './SignUp';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign Up',
};

export default function SignUpPage() {
  return <SignUp />;
}
