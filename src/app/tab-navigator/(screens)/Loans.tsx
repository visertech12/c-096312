import React from 'react';

import {Routes} from '../../../routes';
import {svg} from '../../../svg';
import {components} from '../../../components';

const loanDetails = [
  {
    id: 1,
    title: 'Rate',
    description: '13%',
  },
  {
    id: 2,
    title: 'Period',
    description: '24 months',
  },
  {
    id: 3,
    title: 'Monthly payment',
    description: '1 117.00 USD',
  },
  {
    id: 4,
    title: 'Total paid',
    description: '4 468.00 USD',
  },
];

export const Loans: React.FC = () => {
  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '4%', paddingBottom: '4%'}}
      >
        <h2 style={{marginBottom: 20}}>Loans</h2>
        <span
          className='t16'
          style={{display: 'block', marginBottom: 12}}
        >
          Current loans
        </span>
        <div
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#FFF7F2',
            cursor: 'pointer',
            userSelect: 'none',
            marginBottom: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <svg.PercentageSvg />
          <div style={{marginLeft: 8, marginRight: 'auto'}}>
            <span
              style={{
                fontSize: 20,
                color: 'var(--main-dark)',
              }}
            >
              - 20 532
            </span>
            <span
              style={{
                fontSize: 14,
                color: 'var(--main-dark)',
              }}
            >
              .00 USD
            </span>
          </div>
          <div
            style={{
              fontSize: 14,
              color: 'var(--main-color)',
            }}
          >
            Repay →
          </div>
        </div>
        <div style={{marginBottom: 30}}>
          {loanDetails.map((item, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '0 20px',
                  marginBottom: isLast ? 0 : 14,
                }}
              >
                <span
                  className='t14'
                  style={{marginBottom: 10}}
                >
                  {item.title}
                </span>
                <span
                  className='t14'
                  style={{color: 'var(--main-dark)'}}
                >
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
        <components.Button
          href={Routes.OPEN_NEW_LOAN}
          label='+ new Loan'
          colorScheme='secondary'
        />
      </main>
    );
  };

  return <components.Screen>{renderContent()}</components.Screen>;
};
