'use client';

import React from 'react';

import {svg} from '../../svg';
import {hooks} from '../../hooks';
import {components} from '../../components';

export const EditPersonalInfo: React.FC = () => {
  const router = hooks.useRouter();

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Edit personal info'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='container'
        style={{marginTop: 52 + 10, marginBottom: 20}}
      >
        <div
          style={{
            width: 70,
            height: 70,
            margin: '0 auto',
            marginBottom: 30,
            cursor: 'pointer',
            userSelect: 'none',
            position: 'relative',
          }}
          className='flex-center'
        >
          <img
            alt='avatar'
            src='https://george-fx.github.io/apitex_api/assets/users/01.png'
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 50,
              position: 'absolute',
            }}
          />
          <div
            style={{
              inset: 0,
              borderRadius: 50,
              backgroundColor: 'rgba(27, 29, 77, 0.5)',
              position: 'absolute',
            }}
          />
          <svg.CameraSvg style={{zIndex: 3}} />
        </div>
        <components.InputField
          type='text'
          inputType='username'
          placeholder='Enter your username'
          containerStyle={{marginBottom: 10}}
        />
        <components.InputField
          type='number'
          inputType='phone'
          placeholder='Enter your phone number'
          containerStyle={{marginBottom: 10}}
        />
        <components.InputField
          type='email'
          inputType='email'
          placeholder='Enter your email'
          containerStyle={{marginBottom: '10px'}}
        />
        <components.InputField
          type='text'
          inputType='date'
          placeholder='MM/DD/YYYY'
          containerStyle={{marginBottom: '10px'}}
        />
        <components.InputField
          type='text'
          inputType='location'
          placeholder='Enter your address'
          containerStyle={{marginBottom: '10px'}}
        />
        <components.Button
          label='Save'
          onClick={() => router.back()}
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
