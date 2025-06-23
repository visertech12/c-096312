'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';

import {Routes} from '../../routes';
import {components} from '../../components';

const cards = [
  {
    id: 1,
    balance: '4 863.27',
    number: '**** **** **** 7895',
    cardUrl: '/assets/other/06.png',
  },
  {
    id: 2,
    balance: '2 435.12',
    number: '**** **** **** 7896',
    cardUrl: '/assets/other/07.png',
  },
];

export const IBANPayment: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number>(cards[0].id);

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='IBAN payment'
      />
    );
  };

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderContent = () => {
    return (
      <main className='scrollable'>
        <div style={{paddingTop: 10, paddingBottom: 10}}>
          {/* BENEFICIARY INFO */}
          <section className='container'>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Beneficiary info
            </span>
            <components.InputField
              type='number'
              inputType='iban-number'
              placeholder='IBAN number'
              containerStyle={{marginBottom: 10}}
            />
            <components.InputField
              type='text'
              inputType='username'
              placeholder='Beneficiary name'
              containerStyle={{marginBottom: 10}}
            />
            <components.InputField
              type='number'
              inputType='code'
              placeholder='BIC code'
              containerStyle={{marginBottom: 10}}
            />
            <components.InputField
              type='text'
              inputType='beneficiary-bank'
              placeholder='Beneficiary bank'
              containerStyle={{marginBottom: 10}}
            />
            <components.InputField
              type='number'
              inputType='amount'
              placeholder='Amount'
              containerStyle={{marginBottom: 10}}
            />
            <textarea
              placeholder='Description'
              style={{
                width: '100%',
                height: 120,
                padding: 14,
                borderRadius: 10,
                border: '1px solid #FFEFE6',
                backgroundColor: 'var(--white-color)',
                marginBottom: 10,
                resize: 'none',
              }}
            />
          </section>

          {/* USE CARD */}
          <section>
            <div className='container'>
              <span
                className='t14'
                style={{marginBottom: 10, display: 'block'}}
              >
                Use card
              </span>
            </div>

            <Swiper
              slidesPerView={'auto'}
              spaceBetween={16}
              style={{padding: '0 20px'}}
            >
              {cards.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: 310,
                    }}
                  >
                    <div
                      className='clickable'
                      style={{
                        border:
                          selectedCard === item.id
                            ? '1px solid #6C6D84'
                            : '1px solid #FFEFE6',
                        borderRadius: 10,
                        padding: 12,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'center',
                        backgroundColor: 'var(--white-color)',
                      }}
                      onClick={() => setSelectedCard(item.id)}
                    >
                      <Image
                        src={item.cardUrl}
                        alt='card'
                        width={62}
                        height={42}
                        style={{
                          borderRadius: 6,
                          objectFit: 'cover',
                        }}
                      />
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <span className='t12'>{item.number}</span>
                        <h6>{item.balance} USD</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>

          {/* BUTTON */}
          <section className='container'>
            <components.Button
              label='Send'
              href={Routes.PAYMENT_SUCCESS}
              style={{marginTop: 20}}
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
