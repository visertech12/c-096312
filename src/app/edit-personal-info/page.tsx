import type {Metadata} from 'next';

import {EditPersonalInfo} from './EditPersonalInfo';

export const metadata: Metadata = {
  title: 'Edit Personal Info',
  description: 'Edit Personal Info',
};

export default function EditPersonalInfoPage() {
  return <EditPersonalInfo />;
}
