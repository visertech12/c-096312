'use client';

import Image from 'next/image';
import React, {useState} from 'react';

import {Routes} from '../../../routes';
import {components} from '../../../components';

import type {UserType} from '../../../types';

const cards = [
  {
    id: 1,
    cardUrl: '/assets/other/07.png',
    number: '**** **** **** 7895',
    balance: '4 863.27',
  },
  {
    id: 2,
    cardUrl: '/assets/other/06.png',
    number: '**** **** **** 5378',
    balance: '2 435.12',
  },
];

type Props = {
  id: string;
  users: UserType[];
};

export const FundTransfer: React.FC<Props> = ({id, users}) => {
  const user = users.find((user: UserType) => user.id === Number(id));

  const [selectedCard, setSelectedCard] = useState<number>(cards[0].id);

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Fund transfer'
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <div>
          {/* SEND MONEY */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Send money to
            </span>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Image
                // src='https://george-fx.github.io/apitex_api/assets/users/02.png'
                src={user?.photo ?? 'default-image-url'}
                width={30}
                height={30}
                alt=''
              />

              <h5 style={{marginLeft: 14, marginRight: 'auto'}}>
                {user?.name}
              </h5>
              <span className='t14'>**** 1258</span>
            </div>
          </section>

          {/* USE CARD */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Use card
            </span>
            <ul style={{marginBottom: 10}}>
              {cards.map((card, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <li
                    style={{
                      border:
                        selectedCard === card.id
                          ? `1px solid var(--main-color)`
                          : '1px solid #FFEFE6',
                      padding: 12,
                      borderRadius: 10,
                      cursor: 'pointer',
                      userSelect: 'none',
                      backgroundColor: 'var(--white-color)',
                      marginBottom: isLast ? 0 : 10,
                      display: 'flex',
                      gap: 12,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}
                    key={card.id}
                    onClick={() => setSelectedCard(card.id)}
                  >
                    <Image
                      src={card.cardUrl}
                      alt='card'
                      width={62}
                      height={42}
                      style={{borderRadius: 6}}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          lineHeight: 1.6,
                          color: 'var(--text-color)',
                        }}
                      >
                        {card.number}
                      </div>
                      <h6>{card.balance}</h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <components.InputField
              type='number'
              inputType='amount'
              placeholder='Enter amount'
              containerStyle={{marginBottom: 10}}
            />
            <textarea
              placeholder='Enter description'
              style={{
                width: '100%',
                height: 120,
                backgroundColor: 'var(--white-color)',
                border: '1px solid #FFEFE6',
                borderRadius: 10,
                padding: 14,
                resize: 'none',
              }}
            />
          </section>

          {/* BANK FEE */}
          <section>
            <span
              className='t14'
              style={{marginBottom: 30, display: 'block'}}
            >
              Bank fee: 0.20 USD
            </span>
          </section>

          {/* BUTTON */}
          <section>
            <components.Button
              label='Send'
              // href={Routes.PAYMENT_SUCCESS}
              href={Routes.PAYMENT_SUCCESS}
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
