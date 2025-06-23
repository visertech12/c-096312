'use client';

import React from 'react';

import {hooks} from '../../hooks';
import {components} from '../../components';

export const MobilePayment: React.FC = () => {
  const router = hooks.useRouter();

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Mobile payment'
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <section style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <components.InputField
            inputType='phone'
            containerStyle={{marginBottom: 10}}
            placeholder='+171234567890'
          />
          <components.InputField
            inputType='phone'
            containerStyle={{marginBottom: 10}}
            placeholder='Amount'
          />
          <div
            style={{
              marginBottom: 20,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span className='t14'>Your balance: 4 863.27 USD</span>
            <span className='t14'>No fees</span>
          </div>
          <components.Button
            label='Confirm'
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
