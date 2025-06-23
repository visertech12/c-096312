'use client';

import React from 'react';

import {Routes} from '../../routes';
import {svg} from '../../svg';
import {components} from '../../components';

export const InvoiceSent: React.FC = () => {
  const renderBackground = () => {
    return <components.Background />;
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
          <svg.BillSvg style={{marginBottom: 30}} />
          <h2 style={{marginBottom: 20}}>
            Your invoice has been <br /> sent!
          </h2>
          <p
            className='t16'
            style={{marginBottom: 40}}
          >
            Qui ex aute ipsum duis. Incididunt adipisicing <br /> voluptate
            laborum
          </p>
          <components.Button
            label='Done'
            href={Routes.TAB_NAVIGATOR}
            containerStyle={{width: '50%'}}
          />
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderContent()}
    </components.Screen>
  );
};
