import type {Metadata} from 'next';

import {ForgotPassword} from './ForgotPassword';

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Forgot Password',
};

export default function ForgotPasswordPage() {
  return <ForgotPassword />;
}
