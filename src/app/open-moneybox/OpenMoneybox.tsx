'use client';

import React, {useState} from 'react';
import Image from 'next/image';

import {components} from '../../components';

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

export const OpenMoneybox: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const [amount, setAmount] = useState<
    'per day' | '$1 per transaction' | '$10 per transaction'
  >('per day');

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Open moneybox'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 10, paddingBottom: 10}}
      >
        <div>
          {/* AMOUNT YOU WANT TO ACHIEVE */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              The amount you want to achieve
            </span>
            <components.InputField
              type='number'
              inputType='amount'
              containerStyle={{marginBottom: 10}}
              placeholder='1 200 USD'
            />
            <components.InputField
              inputType='goal'
              containerStyle={{marginBottom: 10}}
              placeholder='Enter your goal'
            />
          </section>

          {/* CARDS */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Use card
            </span>
            <ul>
              <li>
                {cards.map((card, index, array) => {
                  const isLast = index === array.length - 1;

                  return (
                    <div
                      style={{
                        border:
                          selectedCard === card.id
                            ? `1px solid #6C6D84`
                            : '1px solid #FFEFE6',
                        padding: 12,
                        gap: 12,
                        borderRadius: 10,
                        cursor: 'pointer',
                        userSelect: 'none',
                        marginBottom: isLast ? 0 : 10,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'var(--white-color)',
                      }}
                      key={card.id}
                      onClick={() => setSelectedCard(card.id)}
                    >
                      <Image
                        src={card.cardUrl}
                        alt='card'
                        layout='fixed'
                        width={62}
                        height={42}
                        style={{
                          borderRadius: 6,
                        }}
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
                    </div>
                  );
                })}
              </li>
            </ul>
          </section>

          {/* AMOUNT PER DAY */}
          <section>
            <div
              style={{
                marginBottom: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none',
              }}
              onClick={() => setAmount('per day')}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 9,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: `1px solid #6C6D84`,
                }}
              >
                {amount === 'per day' && (
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: '#55ACEE',
                    }}
                  />
                )}
              </div>
              <span
                className='t14'
                style={{marginLeft: 12}}
              >
                Amount per day
              </span>
            </div>
            <components.InputField
              type='number'
              inputType='amount'
              placeholder='10.00'
              containerStyle={{marginBottom: 17}}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 17,
              }}
            >
              {/* Block 01 */}
              <div
                style={{
                  flex: 1,
                  border: '1px solid #FFEFE6',
                  backgroundColor: 'var(--white-color)',
                  borderRadius: 10,
                  padding: 14,
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onClick={() => setAmount('$1 per transaction')}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    border: `1px solid #6C6D84`,
                    borderRadius: 9,
                    marginBottom: 8,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {amount === '$1 per transaction' && (
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: '#55ACEE',
                      }}
                    />
                  )}
                </div>
                <span className='t16'>Rounding up to $1 per transaction.</span>
              </div>
              {/* Block 02 */}
              <div
                style={{
                  border: '1px solid #FFEFE6',
                  backgroundColor: 'var(--white-color)',
                  borderRadius: 10,
                  padding: 14,
                  flex: 1,
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onClick={() => setAmount('$10 per transaction')}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    border: `1px solid #6C6D84`,
                    borderRadius: 9,
                    marginBottom: 8,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {amount === '$10 per transaction' && (
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: '#55ACEE',
                      }}
                    />
                  )}
                </div>
                <span className='t16'>Rounding up to $10 per transaction.</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  };

  const renderButton = () => {
    return (
      <section style={{padding: 20}}>
        <components.Button label='Open moneybox' />
      </section>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </components.Screen>
  );
};
