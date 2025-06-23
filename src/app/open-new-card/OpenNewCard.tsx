'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';

import {Routes} from '../../routes';
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

const types = ['Debet', 'Credit'];
const currencies = ['USD', 'EUR'];
const paymentSystems = ['Visa', 'Mastercard'];

export const OpenNewCard: React.FC = () => {
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedPaymentSystem, setSelectedPaymentSystem] = useState(
    paymentSystems[0],
  );

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Open new card'
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable'>
        <div style={{paddingTop: 10, paddingBottom: 10}}>
          {/* TYPE */}
          <section
            className='container'
            style={{marginBottom: 30}}
          >
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Type
            </span>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 11,
              }}
            >
              {types.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex-center clickable'
                    style={{
                      height: 30,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 10,
                      borderRadius: 6,
                      fontSize: 14,
                      color:
                        selectedType === item ? '#FFF' : 'var(--main-dark)',
                      border: `1px solid ${
                        selectedType === item
                          ? 'var(--main-dark)'
                          : 'var(--text-color)'
                      }`,
                      backgroundColor:
                        selectedType === item
                          ? 'var(--main-dark)'
                          : 'var(--main-light)',
                    }}
                    onClick={() => setSelectedType(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* CHOOSE CURRENCY */}
          <section
            className='container'
            style={{marginBottom: 30}}
          >
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Choose currency
            </span>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 11,
              }}
            >
              {currencies.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex-center clickable'
                    style={{
                      height: 30,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 10,
                      borderRadius: 6,
                      fontSize: 14,
                      color:
                        selectedCurrency === item ? '#FFF' : 'var(--main-dark)',
                      border: `1px solid ${
                        selectedCurrency === item
                          ? 'var(--main-dark)'
                          : 'var(--text-color)'
                      }`,
                      backgroundColor:
                        selectedCurrency === item
                          ? 'var(--main-dark)'
                          : 'var(--main-light)',
                    }}
                    onClick={() => setSelectedCurrency(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* PAYMENT SYSTEM */}
          <section
            className='container'
            style={{marginBottom: 30}}
          >
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Payment system
            </span>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 11,
              }}
            >
              {paymentSystems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex-center clickable'
                    style={{
                      height: 30,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 10,
                      borderRadius: 6,
                      fontSize: 14,
                      color:
                        selectedPaymentSystem === item
                          ? '#FFF'
                          : 'var(--main-dark)',
                      border: `1px solid ${
                        selectedPaymentSystem === item
                          ? 'var(--main-dark)'
                          : 'var(--text-color)'
                      }`,
                      backgroundColor:
                        selectedPaymentSystem === item
                          ? 'var(--main-dark)'
                          : 'var(--main-light)',
                    }}
                    onClick={() => setSelectedPaymentSystem(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* CARDS */}
          <section style={{marginBottom: 20}}>
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={16}
              style={{padding: '0 20px'}}
            >
              {cards.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    style={{width: 310}}
                  >
                    <Link
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: 'auto',
                        borderRadius: 14,
                      }}
                      href={`${Routes.CARD_DETAILS}/${item.id}`}
                    >
                      <Image
                        src={item.cardUrl}
                        alt='card'
                        width={310}
                        height={190}
                        style={{
                          borderRadius: 14,
                          objectFit: 'cover',
                        }}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>

          {/* DESCRIPTION */}
          <section className='container'>
            <p className='t16'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </section>
        </div>
      </main>
    );
  };

  const renderButton = () => {
    return (
      <section style={{padding: '20px'}}>
        <components.Button
          label='Open new card'
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
