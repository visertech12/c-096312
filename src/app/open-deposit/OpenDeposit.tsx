'use client';

import Image from 'next/image';
import React, {useState} from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

const currencies = [
  {
    id: 1,
    title: 'USD',
  },
  {
    id: 2,
    title: 'EUR',
  },
];

const periods = [
  {
    id: 1,
    title: '3 mos',
  },
  {
    id: 2,
    title: '12 mos',
  },
  {
    id: 3,
    title: '24 mos',
  },
  {
    id: 4,
    title: '6 mos',
  },
  {
    id: 5,
    title: '18 mos',
  },
  {
    id: 6,
    title: '36 mos',
  },
];

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

export const OpenDeposit: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>(
    periods[2].title,
  );
  const [selectedCard, setSelectedCard] = useState<number>(cards[0].id);
  const [earlyWithdrawal, setEarlyWithdrawal] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Open deposit'
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <div>
          {/* CURRENCIES */}
          <section style={{marginBottom: 30, marginTop: 10}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Choose currency
            </span>
            <ul
              style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11}}
            >
              {currencies.map((currency, index, array) => {
                return (
                  <li
                    key={currency.id}
                    className='clickable'
                    style={{
                      height: 30,
                      width: '100%',
                      fontSize: 14,
                      borderRadius: 6,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor:
                        selectedCurrency === currency.title
                          ? 'var(--main-dark)'
                          : 'var(--white-color)',
                      border:
                        selectedCurrency === currency.title
                          ? '1px solid var(--main-dark)'
                          : '1px solid var(--main-dark)',
                    }}
                    onClick={() => setSelectedCurrency(currency.title)}
                  >
                    <span
                      className='t14'
                      style={{
                        color:
                          selectedCurrency === currency.title
                            ? 'var(--white-color)'
                            : 'var(--main-dark)',
                      }}
                    >
                      {currency.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* DEPOSIT PERIOD */}
          <section style={{marginBottom: 30}}>
            <span
              style={{marginBottom: 10, display: 'block'}}
              className='t14'
            >
              Choose deposit period
            </span>
            <div style={{display: 'flex', gap: 10}}>
              {/* Block 01 */}
              <div
                style={{
                  flex: '1 1 calc(33.333% - 10px)',
                  backgroundColor: '#FFF7F2',
                  borderRadius: 6,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  aspectRatio: '1/1',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    textTransform: 'capitalize',
                    color: 'var(--main-color)',
                    marginBottom: 8,
                    marginTop: 10,
                  }}
                >
                  You rate
                </span>
                <span
                  style={{
                    fontSize: 24,
                    textTransform: 'capitalize',
                    color: 'var(--main-color)',
                    marginBottom: 8,
                  }}
                >
                  8 %
                </span>
              </div>
              {/* Block 02 */}
              <div
                style={{
                  flex: '1 1 calc(33.333% - 10px)',
                  aspectRatio: '1/1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}
              >
                {periods.slice(0, 3).map((period, index, array) => {
                  return (
                    <div
                      key={period.id}
                      title={period.title}
                      style={{
                        flex: '1 1 calc(33.333% - 10px)',
                        width: '100%',
                        border: `1px solid var(--main-dark)`,
                        borderRadius: 6,
                        display: 'flex',
                        userSelect: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        backgroundColor:
                          selectedPeriod === period.title
                            ? 'var(--main-dark)'
                            : 'var(--white-color)',
                      }}
                      onClick={() => setSelectedPeriod(period.title)}
                    >
                      <span
                        style={{
                          color:
                            selectedPeriod === period.title
                              ? 'var(--white-color)'
                              : 'var(--main-dark)',
                        }}
                      >
                        {period.title}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Block 03 */}
              <div
                style={{
                  flex: '1 1 calc(33.333% - 10px)',
                  aspectRatio: '1/1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}
              >
                {periods.slice(3, 6).map((period, index, array) => {
                  return (
                    <div
                      key={period.id}
                      title={period.title}
                      style={{
                        flex: '1 1 calc(33.333% - 10px)',
                        width: '100%',
                        border: `1px solid var(--main-dark)`,
                        borderRadius: 6,
                        display: 'flex',
                        userSelect: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        backgroundColor:
                          selectedPeriod === period.title
                            ? 'var(--main-dark)'
                            : 'var(--white-color)',
                      }}
                      onClick={() => setSelectedPeriod(period.title)}
                    >
                      <span
                        style={{
                          color:
                            selectedPeriod === period.title
                              ? 'var(--white-color)'
                              : 'var(--main-dark)',
                        }}
                      >
                        {period.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* AMOUNT */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Amount
            </span>
            <components.InputField
              type='number'
              inputType='amount'
              placeholder='1 000.00'
            />
          </section>

          {/* CARDS */}
          <section style={{marginBottom: 30}}>
            <span
              className='t16'
              style={{marginBottom: 10, display: 'block'}}
            >
              Use card
            </span>
            <ul>
              {cards.map((card, index, array) => {
                const isLast = index === array.length - 1;

                return (
                  <li
                    style={{
                      gap: 12,
                      border:
                        selectedCard === card.id
                          ? `1px solid #6C6D84`
                          : '1px solid #FFEFE6',
                      padding: 12,
                      borderRadius: 10,
                      cursor: 'pointer',
                      userSelect: 'none',
                      marginBottom: isLast ? 0 : 10,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
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
          </section>

          {/* DEPOSIT WITHDRAWAL */}
          <section
            style={{
              marginBottom: 30,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h6>Early deposit withdrawal</h6>
            <div
              style={{
                width: 41,
                backgroundColor: earlyWithdrawal ? '#55ACEE' : 'lightgray',
                borderRadius: 12,
                padding: '1.5px 1.5px',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: earlyWithdrawal ? 'flex-end' : 'flex-start',
              }}
              onClick={() => setEarlyWithdrawal(!earlyWithdrawal)}
            >
              <div
                style={{
                  width: 20.9,
                  height: 20.9,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 11,
                  alignSelf: earlyWithdrawal ? 'flex-end' : 'flex-start',
                }}
              />
            </div>
          </section>
        </div>
      </main>
    );
  };

  const renderButton = () => {
    return (
      <section style={{padding: 20}}>
        <components.Button
          label='Open deposit'
          href={Routes.TAB_NAVIGATOR}
        />
      </section>
    );
  };

  return (
    <components.Screen>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </components.Screen>
  );
};
