import React from 'react';
import Link from 'next/link';

import {svg} from '../../../svg';
import {Routes} from '../../../routes';
import {components} from '../../../components';

const deposits = [
  {
    id: 1,
    title: 'Withdrawal →',
    amount: '1 712.78',
    date: 'Jan 1 - Apr 1, 2023',
    icon: <svg.DepositCheckSvg />,
  },
  {
    id: 2,
    title: 'Top - up  →',
    amount: '3 648.37',
    date: 'JFeb 1 - May 1, 2023',
    icon: <svg.DepositPercentSvg />,
  },
];

const moneyboxes = [
  {
    id: 1,
    goal: '1 200 USD',
    amount: '650.37',
    item: 'New iPhone Pro Max',
    icon: <svg.PiggyBankSvg />,
  },
];

export const Deposits: React.FC = () => {
  const renderContent = () => {
    return (
      <main
        style={{paddingTop: '4%', paddingBottom: '4%'}}
        className='scrollable container'
      >
        <h2 style={{marginBottom: 20}}>Deposits</h2>

        {/* DEPOSITS */}
        <section style={{marginBottom: 30}}>
          <span
            className='t14'
            style={{marginBottom: 10, display: 'block'}}
          >
            Current deposits
          </span>
          <ul>
            {deposits.map((deposit, index, array) => {
              const isLast = index === array.length - 1;
              return (
                <li key={deposit.id}>
                  <Link
                    href={
                      deposit.title === 'Top - up  →'
                        ? Routes.TOP_UP_PAYMENT
                        : ''
                    }
                    style={{
                      width: '100%',
                      backgroundColor: '#FFF7F2',
                      borderRadius: 10,
                      padding: '20px 18px',
                      cursor: 'pointer',
                      userSelect: 'none',
                      marginBottom: isLast ? 0 : 6,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    {deposit.icon}
                    <div style={{marginLeft: 12, marginRight: 'auto'}}>
                      <div style={{fontSize: 20, marginBottom: 1}}>
                        {deposit.amount}{' '}
                        <span
                          style={{
                            fontSize: 14,
                            textTransform: 'uppercase',
                            color: 'var(--main-dark)',
                          }}
                        >
                          usd
                        </span>
                      </div>
                      <span className='t14'>{deposit.date}</span>
                    </div>
                    <span className='t14'>{deposit.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* MONEYBOXES */}
        <section style={{marginBottom: 30}}>
          <span
            className='t14'
            style={{marginBottom: 10, display: 'block'}}
          >
            Current moneyboxes
          </span>
          {moneyboxes.map((deposit, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <div
                key={index}
                style={{
                  width: '100%',
                  backgroundColor: '#FFF7F2',
                  borderRadius: 10,
                  padding: '20px 18px',
                  cursor: 'pointer',
                  userSelect: 'none',
                  marginBottom: isLast ? 0 : 6,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                {deposit.icon}
                <div style={{marginLeft: 12, marginRight: 'auto'}}>
                  <div style={{fontSize: 20, marginBottom: 1}}>
                    {deposit.amount}{' '}
                    <span
                      style={{
                        fontSize: 14,
                        textTransform: 'uppercase',
                        color: 'var(--main-dark)',
                      }}
                    >
                      usd
                    </span>
                  </div>
                  <span className='t14'>{deposit.item}</span>
                </div>
                <span className='t14'>Goal: {deposit.goal}</span>
              </div>
            );
          })}
        </section>

        {/* BUTTONS */}
        <section
          style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 17}}
        >
          <components.Button
            label='+ moneybox'
            colorScheme='secondary'
            style={{marginBottom: 20}}
            href={Routes.OPEN_MONEYBOX}
          />
          <components.Button
            label='+ Deposit'
            style={{marginBottom: 20}}
            href={Routes.OPEN_DEPOSIT}
          />
        </section>
      </main>
    );
  };

  return <components.Screen>{renderContent()}</components.Screen>;
};
