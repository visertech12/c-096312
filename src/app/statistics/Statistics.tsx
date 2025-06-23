'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from 'react';

import {svg} from '../../svg';
import {Routes} from '../../routes';
import {components} from '../../components';

import type {StatisticType} from '../../types';

const categories = ['income', 'expenses'];

type Props = {
  statistics: StatisticType[];
};

export const Statistics: React.FC<Props> = ({statistics}) => {
  const [category, setCategory] = useState(categories[1]);

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Statistics'
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
          {/* SEGMENTED CONTROL */}
          <section
            style={{
              backgroundColor: '#FFF6F2',
              borderRadius: 5,
              padding: 2,
              gap: 10,
              marginBottom: 30,
            }}
          >
            <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
              {categories.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      width: '100%',
                      backgroundColor:
                        category === item ? 'var(--main-dark)' : '#FFF6F2',
                      borderRadius: 5,
                      lineHeight: 1.6,
                      paddingBottom: 5,
                      paddingTop: 3,
                      fontSize: 14,
                      cursor: 'pointer',
                      userSelect: 'none',
                      textTransform: 'capitalize',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    className='clickable'
                    onClick={() => setCategory(item)}
                  >
                    <span
                      className='t14'
                      style={{
                        color:
                          category === item
                            ? 'var(--white-color)'
                            : 'var(--main-dark)',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* CARD */}
          <section>
            <div
              style={{
                gap: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 14,
              }}
            >
              <span className='t14'>Sep 1 - Sep 20, 2022</span>
              <svg.CalendarStatisticSvg />
            </div>
            <div
              style={{
                border: '1px solid #FFEFE6',
                padding: '12px 20px 12px 12px',
                borderRadius: 10,
                cursor: 'pointer',
                userSelect: 'none',
                marginBottom: 30,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                src={'/assets/other/07.png'}
                alt='card'
                width={62}
                height={42}
                style={{borderRadius: 6}}
              />
              <div style={{marginLeft: 12, marginRight: 'auto'}}>
                <span
                  style={{
                    fontSize: 12,
                    color: 'var(--text-color)',
                  }}
                >
                  **** **** **** 7895
                </span>
                <h6>4 863.27 USD</h6>
              </div>
              <svg.MoreVerticalSvg />
            </div>
          </section>

          {/* CHART */}
          <section
            style={{
              padding: 20,
              border: '1px solid #FFEFE6',
              borderRadius: 14,
              marginBottom: 30,
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '76%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                gap: 10,
              }}
            >
              <div
                style={{
                  height: 126,
                  flex: '1 1 20%',
                  backgroundColor: 'var(--main-dark)',
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  height: 95,
                  flex: '1 1 20%',
                  backgroundColor: '#4F4F66',
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  height: 51,
                  flex: '1 1 20%',
                  backgroundColor: '#818192',
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  height: 37,
                  flex: '1 1 20%',
                  backgroundColor: '#B4B3BE',
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  height: 8,
                  flex: '1 1 20%',
                  backgroundColor: '#CDCDD3',
                  borderRadius: 3,
                }}
              />
            </div>
            <span
              style={{
                right: 20,
                bottom: 12,
                color: 'var(--main-dark)',
                position: 'absolute',
              }}
              className='t16'
            >
              USD
            </span>
            <div style={{position: 'absolute', top: 20, right: 20}}>
              <span
                style={{
                  fontSize: 32,
                  color: 'var(--main-dark)',
                }}
              >
                - 11 654
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: 'var(--main-dark)',
                }}
              >
                .24
              </span>
            </div>
          </section>

          {/* TRANSACTIONS */}
          <section>
            <ul>
              {statistics.map(
                (
                  item: StatisticType,
                  index: number,
                  array: StatisticType[],
                ) => {
                  const isLast = index === array.length - 1;
                  return (
                    <Link
                      key={item.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: isLast ? 0 : 6,
                        backgroundColor: '#FFF7F2',
                        borderRadius: 10,
                        padding: 10,
                      }}
                      href={`${Routes.TRANSACTION_DETAILS}/${item.id}`}
                    >
                      {/* {item.icon} */}
                      <Image
                        src={item.icon}
                        alt='icon'
                        width={40}
                        height={40}
                      />
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginLeft: 14,
                          marginRight: 'auto',
                        }}
                      >
                        <h6>{item.name}</h6>
                        <span
                          style={{fontSize: 12, color: 'var(--text-color)'}}
                        >
                          {item.transactionsQty}{' '}
                          {item.transactionsQty > 1
                            ? 'transactions'
                            : 'transaction'}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                        }}
                      >
                        <h6>- {item.amount}</h6>
                        <span
                          style={{
                            fontSize: 12,
                            color: 'var(--text-color)',
                          }}
                        >
                          {item.inPercent}%
                        </span>
                      </div>
                    </Link>
                  );
                },
              )}
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
