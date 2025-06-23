import React from 'react';
import type {Metadata} from 'next';

import {Onboarding} from './Onboarding';

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'Onboarding',
};

export default function Start() {
  return <Onboarding />;
}
