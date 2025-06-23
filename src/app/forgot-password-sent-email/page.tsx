import type {Metadata} from 'next';

import {ForgotPasswordSentEmail} from './ForgotPasswordSentEmail';

export const metadata: Metadata = {
  title: 'Forgot Password Sent Email',
  description: 'Forgot Password Sent Email',
};

export default function ForgotPasswordSentEmailPage() {
  return <ForgotPasswordSentEmail />;
}
