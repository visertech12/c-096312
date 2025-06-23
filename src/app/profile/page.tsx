import type {Metadata} from 'next';

import {Profile} from './Profile';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Profile',
};

export default function Page() {
  return <Profile />;
}
