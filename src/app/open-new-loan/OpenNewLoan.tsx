'use client';

import React, {useState} from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

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

const currencies = ['USD', 'EUR'];

export const OpenNewLoan: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');
  const [selectedPeriod, setSelectedPeriod] = useState<string>(
    periods[2].title,
  );
  const [earlyLoanRepayment, setEarlyLoanRepayment] = useState<boolean>(true);

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Open new loan'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 10, paddingBottom: 10}}
      >
        <div style={{marginBottom: 30}}>
          {/* CURRENCIES */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Choose currency
            </span>
            <ul
              style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11}}
            >
              {currencies.map((title) => {
                return (
                  <li
                    key={title}
                    style={{
                      borderRadius: 6,
                      flex: '1 1 calc(50% - 5.5px)',
                      height: 30,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      userSelect: 'none',
                      cursor: 'pointer',
                      border: `1px solid var(--main-dark)`,
                      backgroundColor:
                        currency === title
                          ? 'var(--main-dark)'
                          : 'var(--white-color)',
                    }}
                    onClick={() => setCurrency(title as 'USD' | 'EUR')}
                  >
                    <span
                      style={{
                        textTransform: 'capitalize',
                        color:
                          currency === title
                            ? 'var(--white-color)'
                            : 'var(--main-dark)',
                      }}
                    >
                      {title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* LOAN PERIOD */}
          <section style={{marginBottom: 30}}>
            <span
              className='t14'
              style={{marginBottom: 10, display: 'block'}}
            >
              Choose loan period
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
                  13 %
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
                        className='t14'
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
              inputType='amount'
              placeholder='25 000.00'
            />
          </section>

          {/* MONTHLY REPAYMENT */}
          <section style={{marginBottom: 30}}>
            <span
              style={{marginBottom: 10, display: 'block'}}
              className='t14'
            >
              Calculated monthly repayment
            </span>
            <components.InputField
              inputType='amount'
              placeholder='1 117.00'
            />
          </section>

          {/* LOAN REPAYMENT */}
          <section
            style={{
              marginBottom: 30,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>Early loan repayment</span>
            <div
              style={{
                width: 41,
                backgroundColor: earlyLoanRepayment ? '#55ACEE' : 'lightgray',
                borderRadius: 12,
                padding: '1.5px 1.5px',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: earlyLoanRepayment ? 'flex-end' : 'flex-start',
              }}
              onClick={() => setEarlyLoanRepayment(!earlyLoanRepayment)}
            >
              <div
                style={{
                  width: 20.9,
                  height: 20.9,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 11,
                  alignSelf: earlyLoanRepayment ? 'flex-end' : 'flex-start',
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
          label='open new loan'
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
