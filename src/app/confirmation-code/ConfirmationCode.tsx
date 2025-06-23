'use client';

import React from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

export const ConfirmationCode: React.FC = () => {
  const inputs = ['', '', '', '', ''];

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
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
      }
    };

    return (
      <main
        className='scrollable container'
        style={{paddingTop: 20, paddingBottom: 20}}
      >
        <span
          className='t16'
          style={{marginBottom: 30, display: 'block'}}
        >
          Enter your OTP code here.
        </span>
        <ul
          style={{
            marginBottom: 30,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {inputs.map((_, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                width: '17%',
                aspectRatio: 1 / 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                border: '1px solid #FFEFE6',
              }}
            >
              <input
                maxLength={1}
                style={{
                  textAlign: 'center',
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                  border: 'none',
                  fontSize: 20,
                }}
                type='number'
                min={0}
                max={9}
                onInput={handleInput}
              />
            </li>
          ))}
        </ul>
        <span className='t16'>
          Didn’t receive the OTP?{' '}
          <span
            style={{color: 'var(--main-color)'}}
            className='clickable'
          >
            Resend.
          </span>
        </span>
        <components.Button
          label='Confirm'
          style={{marginTop: 30}}
          href={Routes.SIGN_UP_ACCOUNT_CREATED}
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
