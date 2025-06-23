'use client';

import React, {useState} from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

const currencies = ['USD', 'EUR'];

export const CreateInvoice: React.FC = () => {
  const [selectedCurrency, setCurrency] = useState<string>('USD');

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Create invoice'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '10px', paddingBottom: '10px'}}
      >
        <div>
          {/* INPUT FIELDS */}
          <section style={{marginBottom: 30}}>
            <components.InputField
              type='text'
              inputType='username'
              placeholder='Company name'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              type='text'
              inputType='country'
              placeholder='Country'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              type='email'
              inputType='email'
              placeholder='Company email'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              type='number'
              inputType='amount'
              placeholder='Amount'
            />
          </section>

          {/* CURRENCIES */}
          <section style={{marginBottom: 30}}>
            <ul style={{display: 'flex', gap: 11}}>
              {currencies.map((currency, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      flex: 1,
                      height: 30,
                      backgroundColor:
                        currency === selectedCurrency
                          ? 'var(--main-dark)'
                          : 'transparent',
                      borderRadius: 6,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: `1px solid ${
                        currency === selectedCurrency
                          ? 'var(--main-dark)'
                          : '#6C6D84'
                      }`,
                    }}
                    className='clickable'
                    onClick={() => setCurrency(currency)}
                  >
                    <span
                      className='t14'
                      style={{
                        color:
                          currency === selectedCurrency
                            ? 'var(--white-color)'
                            : 'var(--main-dark)',
                      }}
                    >
                      {currency}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* TEXTAREA */}
          <section style={{marginBottom: 30}}>
            <textarea
              placeholder='Goods or services you provided'
              style={{
                width: '100%',
                height: 120,
                padding: '14px 20px',
                borderRadius: 10,
                border: '1px solid #FFEFE6',
                resize: 'none',
                fontFamily: 'var(--source-sans-3)',
                fontSize: 16,
              }}
            />
            <span
              className='t14'
              style={{color: 'var(--text-color)'}}
            >
              Bank fee is charged from the payer.
            </span>
          </section>

          {/* BUTTON */}
          <section>
            <components.Button
              label='Send invoice'
              href={Routes.INVOICE_SENT}
            />
          </section>
        </div>
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
