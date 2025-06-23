'use client';

import React from 'react';
import Image from 'next/image';

import {svg} from '../../svg';
import {components} from '../../components';

const methods = [
  {
    id: 1,
    title: 'Card from another bank',
    icon: <svg.TopUpCreditCardSvg />,
  },
  {
    id: 2,
    title: 'SEPA',
    icon: <svg.SepaSvg />,
  },
  {
    id: 3,
    title: 'Western Union',
    icon: <svg.WJSvg />,
  },
  {
    id: 4,
    title: 'Paypal',
    icon: <svg.PayPalSvg />,
  },
  {
    id: 5,
    title: 'Payoneer',
    icon: <svg.PayoneerSvg />,
  },
];

export const TopUpPayment: React.FC = () => {
  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Top-Up payment'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 10, paddingBottom: 20}}
      >
        {/* CARDS */}
        <section style={{marginBottom: 30}}>
          <span
            className='t14'
            style={{marginBottom: 10, display: 'block'}}
          >
            Cards
          </span>
          <div
            style={{
              padding: 12,
              borderRadius: 10,
              backgroundColor: '#FFF7F2',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <Image
              src={'/assets/other/06.png'}
              alt='card'
              width={62}
              height={40}
            />
            <div>
              <span
                className='t12'
                style={{
                  fontSize: 12,
                  lineHeight: 1.6,
                }}
              >
                **** **** **** 8456
              </span>
              <h6>2 156.35 EUR</h6>
            </div>
          </div>
        </section>

        {/* ENTERPRISE ACCOUNT */}
        <section style={{marginBottom: 30}}>
          <span
            className='t14'
            style={{marginBottom: 10, display: 'block'}}
          >
            Entrepreneur accounts
          </span>
          <div
            style={{
              padding: 12,
              borderRadius: 10,
              backgroundColor: '#FFF7F2',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <Image
              src={'/assets/other/05.png'}
              alt='card'
              width={62}
              height={42}
            />
            <div>
              <span
                className='t12'
                style={{
                  fontSize: 12,
                  lineHeight: 1.6,
                }}
              >
                US**********************4571
              </span>
              <h6>39 863.62 USD</h6>
            </div>
          </div>
        </section>

        {/* OTHER PAYMENT METHODS */}
        <section>
          <span
            className='t14'
            style={{marginBottom: 10, display: 'block'}}
          >
            Other methods
          </span>
          <ul>
            {methods.map((method, index, array) => {
              const isLast = index === array.length - 1;
              return (
                <li
                  className='clickable'
                  key={method.id}
                  style={{
                    borderRadius: 10,
                    marginBottom: isLast ? 0 : 20,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onClick={() => {}}
                >
                  <div>{method.icon}</div>
                  <h6 style={{marginLeft: 14, marginRight: 'auto'}}>
                    {method.title}
                  </h6>
                  <svg.InfoSvg />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
