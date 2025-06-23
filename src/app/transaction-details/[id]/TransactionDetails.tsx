'use client';

import React from 'react';

import {svg} from '../../../svg';
import {components} from '../../../components';
import type {TransactionType} from '../../../types';

type Props = {
  detailsArray: TransactionType[];
  transactionId: string;
};

export const TransactionDetails: React.FC<Props> = ({
  transactionId,
  detailsArray,
}) => {
  const details: TransactionType | undefined = detailsArray.find(
    (transaction: TransactionType) => transaction.id === Number(transactionId),
  );

  const renderHeader = () => {
    return <components.Header showGoBack={true} />;
  };

  const renderContent = () => {
    return (
      <main
        style={{paddingTop: 10}}
        className='scrollable container'
      >
        <div>
          {/* HEADER */}
          <section style={{marginBottom: 25}}>
            <span
              style={{
                fontSize: 40,
                textAlign: 'center',
                display: 'block',
                marginBottom: 10,
              }}
            >
              {details?.direction === 'in' ? '+' : '-'} {details?.amount}
            </span>
            <span
              className='t14'
              style={{textAlign: 'center', display: 'block', marginBottom: 20}}
            >
              Apr 10, 2023 at 11:34 AM
            </span>
            <div
              className='center'
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <svg.TransactionCheckSvg />
            </div>
          </section>

          {/* DETAILS */}
          <section style={{marginBottom: 30}}>
            <ul>
              <li
                className='row-sb'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 14,
                }}
              >
                <span className='t16'>Sent to</span>
                <h5>Hillary Holmes</h5>
              </li>
              <li
                className='row-sb'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 14,
                }}
              >
                <span className='t16'>Card</span>
                <span>**** 4253</span>
              </li>
              <li
                className='row-sb'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 14,
                }}
              >
                <span className='t16'>Amount</span>
                <span>{details?.amount} USD</span>
              </li>
              <li
                className='row-sb'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 14,
                }}
              >
                <span className='t16'>Fee</span>
                <span>1.8 USD</span>
              </li>
              <li
                className='row-sb'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span className='t16'>Residual balance</span>
                <span>4 863.27 USD</span>
              </li>
            </ul>
          </section>

          {/* BUTTONS */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 17,
            }}
          >
            <components.Button
              label='repeat transfer'
              style={{marginBottom: 10}}
              colorScheme='secondary'
            />
            <components.Button
              label='Download PDF'
              style={{marginBottom: 10}}
            />
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
