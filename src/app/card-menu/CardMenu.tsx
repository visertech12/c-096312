'use client';

import React from 'react';
import Image from 'next/image';

import {hooks} from '../../hooks';
import {components} from '../../components';

const cards = [
  {
    id: 1,
    cardUrl: '/assets/other/08.png',
  },
  {
    id: 2,
    cardUrl: '/assets/other/09.png',
  },
];

const ongoing = [
  {
    id: 1,
    cardUrl: '/assets/other/10.png',
  },
];

export const CardMenu: React.FC = () => {
  const router = hooks.useRouter();

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Card menu'
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <div style={{paddingTop: 10, paddingBottom: 10}}>
          {/* CARDS */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Cards
            </span>
            <ul
              style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11}}
            >
              {cards.map((card, index) => {
                return (
                  <li key={index}>
                    <Image
                      src={card.cardUrl}
                      alt='Card'
                      width={172}
                      height={100}
                      style={{borderRadius: 10, width: '100%', height: 'auto'}}
                    />
                  </li>
                );
              })}
            </ul>
          </section>

          {/* ONGOING CREDITS */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Ongoing credits
            </span>
            <ul
              style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11}}
            >
              {ongoing.map((card, index) => {
                return (
                  <li key={index}>
                    <Image
                      src={card.cardUrl}
                      alt='Card'
                      width={172}
                      height={100}
                      style={{borderRadius: 10, width: '100%', height: 'auto'}}
                    />
                  </li>
                );
              })}
            </ul>
          </section>

          {/* ENTERPRENEUR ACCOUNT */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Entrepreneur accounts
            </span>
            <div
              style={{
                backgroundColor: '#FFF7F2',
                borderRadius: 10,
                padding: 12,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <img
                alt='card'
                style={{width: 62}}
                src={'/assets/other/05.png'}
              />
              <div>
                <span className='t12'>US**********************4571</span>
                <h6>39 863.62 USD</h6>
              </div>
            </div>
          </section>

          {/* BUTTON */}
          <section>
            <components.Button
              onClick={() => {
                router.back();
              }}
              label='+ Add new card'
              colorScheme='secondary'
            />
          </section>
        </div>
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
