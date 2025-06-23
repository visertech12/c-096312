'use client';

import React from 'react';

import {svg} from '../../svg';
import {hooks} from '../../hooks';
import {components} from '../../components';

export const PaymentFailed: React.FC = () => {
  const router = hooks.useRouter();

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return <components.Header showGoBack={true} />;
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            height: '100%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <svg.CancelSvg style={{marginBottom: 30}} />
          <h2 style={{marginBottom: 30, color: 'var(--main-color)'}}>
            Oops! Something went <br /> wrong
          </h2>
          <h2 style={{fontWeight: 400, marginBottom: 10}}>
            364
            <span
              className='t16'
              style={{color: 'var(--main-dark)'}}
            >
              .00 USD
            </span>{' '}
          </h2>
          <p
            className='t16'
            style={{marginBottom: 30}}
          >
            Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi
            mollit.
          </p>
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 17,
            }}
          >
            <li>
              <components.Button
                label='Cancel'
                colorScheme='secondary'
                onClick={() => router.back()}
              />
            </li>
            <li>
              <components.Button
                label='Try Again'
                onClick={() => router.back()}
              />
            </li>
          </ul>
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
