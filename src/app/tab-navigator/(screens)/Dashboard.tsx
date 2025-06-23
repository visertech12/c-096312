'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';

import {items} from '../../../items';
import {Routes} from '../../../routes';
import {svg} from '../../../svg';
import {components} from '../../../components';

import type {UserType} from '../../../types';
import type {TransactionType} from '../../../types';

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

const operations = [
  {
    id: 1,
    titleLine1: 'Receive',
    titleLine2: 'Payment',
    icon: <svg.ReceiveSvg />,
    route: Routes.CREATE_INVOICE,
  },
  {
    id: 2,
    titleLine1: 'Money',
    titleLine2: 'Transfer',
    icon: <svg.RepeatSvg />,
    route: `${Routes.FUND_TRANSFER}/1`,
  },
  {
    id: 3,
    titleLine1: 'Make a',
    titleLine2: 'Payment',
    icon: <svg.DollarSignSvg />,
    route: Routes.PAYMENTS,
  },
];

type Props = {
  users: UserType[];
  transactions: TransactionType[];
};

export const Dashboard: React.FC<Props> = ({transactions, users}) => {
  const renderHeader = () => {
    return (
      <section>
        <components.Header
          user={true}
          creditCard={true}
        />
      </section>
    );
  };

  const renderCards = () => {
    return (
      <section style={{marginTop: 10, marginBottom: 16}}>
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
    );
  };

  const renderOperations = () => {
    return (
      <section
        className='container'
        style={{marginBottom: 30}}
      >
        <ul
          style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16}}
        >
          {operations.map((operation, index) => {
            return (
              <li key={index}>
                <Link
                  key={index}
                  style={{
                    backgroundColor: 'var(--main-dark)',
                    padding: 11,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 7,
                  }}
                  href={operation.route}
                >
                  {operation.icon}
                  <span
                    style={{
                      fontSize: 10,
                      color: '#B4B4C6',
                      fontFamily: 'var(--source-sans-3)',
                      fontWeight: 600,
                    }}
                  >
                    {operation.titleLine1} <br />
                    {operation.titleLine2}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderQuickMoneyTransferTo = () => {
    return (
      <section style={{marginBottom: 30}}>
        <components.BlockHeading
          title='Latest transactions'
          containerStyle={{marginBottom: 14, marginLeft: 20}}
        />
        <Swiper
          slidesPerView={'auto'}
          style={{padding: '0 20px'}}
        >
          {users.map((user, index) => {
            return (
              <SwiperSlide
                key={user.id}
                style={{width: 60}}
              >
                <Link
                  style={{
                    position: 'relative',
                    borderRadius: 14,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                  href={`${Routes.FUND_TRANSFER}/${user.id}`}
                >
                  <Image
                    src={user.photo}
                    alt='card'
                    width={40}
                    height={40}
                    style={{
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginBottom: 4,
                    }}
                  />
                  <span
                    className='t12'
                    style={{textAlign: 'center'}}
                  >
                    {user.name}
                  </span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
  };

  const renderLatestTransactions = () => {
    return (
      <section
        className='container'
        style={{width: '100%'}}
      >
        <components.BlockHeading
          title='Latest transactions'
          rightComponent={<svg.SearchSvg />}
          containerStyle={{marginBottom: 14}}
        />
        <ul>
          {transactions.map((transaction, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <items.TransactionItem
                key={index}
                isLast={isLast}
                transaction={transaction}
              />
            );
          })}
        </ul>
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable'
        style={{width: '100%', height: '100%'}}
      >
        {renderCards()}
        {renderOperations()}
        {renderQuickMoneyTransferTo()}
        {renderLatestTransactions()}
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
