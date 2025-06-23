'use client';

import React from 'react';

import {hooks} from '../../hooks';
import {components} from '../../components';

export const ChangePINCode: React.FC = () => {
  const router = hooks.useRouter();

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Change PIN code'
      />
    );
  };

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <section style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <components.InputField
            placeholder='••••'
            type='password'
            inputType='password'
            containerStyle={{marginBottom: 10}}
          />
          <components.InputField
            type='password'
            inputType='password'
            placeholder='New PIN'
            containerStyle={{marginBottom: 10}}
          />
          <components.InputField
            placeholder='Confirm PIN'
            type='password'
            inputType='password'
            containerStyle={{marginBottom: 14}}
          />
          <components.Button
            label='Save'
            onClick={() => router.back()}
          />
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
