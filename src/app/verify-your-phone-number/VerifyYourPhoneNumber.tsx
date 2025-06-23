'use client';

import React from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

export const VerifyYourPhoneNumber: React.FC = () => {
  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Verify your phone number'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '20px', paddingBottom: '20px'}}
      >
        <p
          className='t16'
          style={{marginBottom: '30px'}}
        >
          We have sent you an SMS with a code to number +17 0123456789.
        </p>
        <components.InputField
          type='text'
          inputType='phone'
          placeholder='Enter your phone number'
          containerStyle={{marginBottom: 14}}
        />
        <components.Button
          label='Confirm'
          href={Routes.CONFIRMATION_CODE}
        />
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
