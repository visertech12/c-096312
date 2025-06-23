'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from 'react';

import {svg} from '../../../svg';
import {Routes} from '../../../routes';
import {components} from '../../../components';

const security = [
  {
    id: 1,
    title: 'Change PIN code',
    icon: <svg.KeyDetailsSvg />,
    route: Routes.CHANGE_PIN_CODE,
  },
  {
    id: 2,
    title: 'Reissue the card',
    icon: <svg.RefreshSvg />,
    route: Routes.OPEN_NEW_CARD,
  },
  {
    id: 3,
    title: 'Block the card',
    icon: <svg.LockSvg />,
    route: '',
  },
  {
    id: 4,
    title: 'Сlose the card',
    icon: <svg.TrashSvg />,
    route: '',
  },
];

const limits = [
  {
    id: 1,
    title: 'Online payments',
    description: 'Default limit: 100 USD per day',
    icon: <svg.GlobeSvg />,
    route: Routes.PAYMENTS,
  },
  {
    id: 2,
    title: 'ATM withdrawals',
    description: 'Default limit: 3000 USD per day',
    icon: <svg.DollarDetailsSvg />,
    route: '',
  },
];

type Props = {
  cardId: string;
};

export const CardDetails: React.FC<Props> = ({cardId}) => {
  console.log('cardId:', cardId);

  const [defaultCard, setDefaultCard] = useState<boolean>(true);

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        document={true}
      />
    );
  };

  const renderContent = () => {
    const btnStyle: React.CSSProperties = {
      width: '100%',
      padding: '14px',
      backgroundColor: '#FFF7F2',
      borderRadius: '10px',
      border: '1px solid #FFEFE6',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    };

    return (
      <main className='scrollable container'>
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
          {/* CARD */}
          <section style={{marginBottom: '20px'}}>
            <div
              style={{
                width: '80%',
                margin: '0 auto',
                position: 'relative',
                aspectRatio: '2 / 1',
              }}
            >
              {/* 1004 × 1236 */}
              <Image
                alt='card'
                fill={true}
                src={'/assets/other/02.png'}
                sizes='100vw'
                style={{objectFit: 'contain'}}
              />
            </div>
          </section>

          {/* BIG BUTTONS */}
          <section style={{marginBottom: '30px'}}>
            <ul style={{display: 'flex', flexDirection: 'row', gap: 17}}>
              <li
                style={{...btnStyle}}
                className='clickable'
              >
                <Image
                  alt='card'
                  src={'/assets/other/03.png'}
                  width={24}
                  height={18}
                />
                <h5 style={{marginRight: 'auto'}}>Apple Pay</h5>
                <svg.PlusSvg />
              </li>
              <li
                className='clickable'
                onClick={() => setDefaultCard(!defaultCard)}
                style={{...btnStyle, justifyContent: 'space-between'}}
              >
                <h5>Default card</h5>
                <div
                  style={{
                    width: 41,
                    backgroundColor: defaultCard ? '#55ACEE' : 'lightgray',
                    borderRadius: 12,
                    padding: '1.5px 1.5px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: defaultCard ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: 20.9,
                      height: 20.9,
                      backgroundColor: '#FFFFFF',
                      borderRadius: 11,
                      alignSelf: defaultCard ? 'flex-end' : 'flex-start',
                    }}
                  />
                </div>
              </li>
            </ul>
          </section>

          {/* LIMITS */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Limits
            </span>
            <ul>
              {limits.map((limit, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <li key={limit.id}>
                    <Link
                      href={limit.route || ''}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 10,
                        alignItems: 'center',
                        marginBottom: isLast ? 0 : 14,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 10,
                            alignItems: 'center',
                          }}
                        >
                          {limit.icon}
                          <h5>{limit.title}</h5>
                        </div>
                        <span
                          style={{
                            fontSize: 12,
                            color: 'var(--text-color)',
                          }}
                        >
                          {limit.description}
                        </span>
                      </div>
                      <svg.RightArrowSvg />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* SECURITY */}
          <section>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Security
            </span>
            <ul>
              {security.map((item, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.route || ''}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: isLast ? 0 : 20,
                        cursor: 'pointer',
                        userSelect: 'none',
                      }}
                    >
                      {item.icon}
                      <h5
                        style={{
                          marginLeft: 10,
                          marginRight: 'auto',
                          color:
                            item.title === 'Block the card' ||
                            item.title === 'Сlose the card'
                              ? 'var(--main-color)'
                              : 'var(--main-dark)',
                        }}
                      >
                        {item.title}
                      </h5>
                      <svg.RightArrowSvg />
                    </Link>
                  </li>
                );
              })}
            </ul>
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
