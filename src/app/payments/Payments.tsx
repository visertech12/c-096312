'use client';

import React from 'react';
import Link from 'next/link';

import {svg} from '../../svg';
import {Routes} from '../../routes';
import {components} from '../../components';

const payments = [
  {
    id: 1,
    title: 'Money transfer',
    icon: <svg.MoneyExchangeSvg />,
    route: '',
  },
  {
    id: 2,
    title: 'Mobile payment',
    icon: <svg.MobilePaymentSvg />,
    route: Routes.MOBILE_PAYMENT,
  },
  {
    id: 3,
    title: 'IBAN payment',
    icon: <svg.PayCheckSvg />,
    route: Routes.IBAN_PAYMENT,
  },
  {
    id: 4,
    title: 'Utility bills',
    icon: <svg.InvoiceSvg />,
    route: '',
  },
  {
    id: 5,
    title: 'Transport',
    icon: <svg.CarSvg />,
    route: '',
  },
  {
    id: 6,
    title: 'Insurance',
    icon: <svg.InsuranceSvg />,
    route: '',
  },
  {
    id: 7,
    title: 'Penalties',
    icon: <svg.YellowCardSvg />,
    route: '',
  },
  {
    id: 8,
    title: 'Charity',
    icon: <svg.CharitySvg />,
    route: '',
  },
];

export const Payments: React.FC = () => {
  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Payments'
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <ul style={{paddingTop: 10, paddingBottom: 20}}>
          {payments.map((item, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <li key={item.id}>
                <Link
                  href={item.route || '#'}
                  style={{
                    gap: 14,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    cursor: 'pointer',
                    userSelect: 'none',
                    marginBottom: isLast ? 0 : 20,
                  }}
                >
                  {item.icon}
                  <h6 style={{marginRight: 'auto'}}>{item.title}</h6>
                  <svg.InfoSvg />
                </Link>
              </li>
            );
          })}
        </ul>
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
