'use client';

import React from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

export const NewPassword: React.FC = () => {
  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return <components.Header title='New password' />;
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '20px'}}
      >
        <p
          className='t16'
          style={{marginBottom: '30px'}}
        >
          Enter new password and confirm.
        </p>
        <components.InputField
          inputType='email'
          placeholder='Enter your email'
          containerStyle={{marginBottom: '10px'}}
        />
        <components.InputField
          inputType='password'
          placeholder='Enter your password'
          containerStyle={{marginBottom: '14px'}}
        />
        <components.Button
          label='Change Password'
          href={Routes.FORGOT_PASSWORD_SENT_EMAIL}
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
