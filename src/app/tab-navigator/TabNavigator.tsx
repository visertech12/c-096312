'use client';

import React from 'react';

import {hooks} from '../../hooks';
import {stores} from '../../stores';
import {TabScreens} from '../../routes';
import {components} from '../../components';

import {Dashboard} from './(screens)/Dashboard';
import {Deposits} from './(screens)/Deposits';
import {Loans} from './(screens)/Loans';
import {More} from './(screens)/More';
import {Notification} from './(screens)/Notification';

import type {UserType} from '../../types';
import type {TransactionType} from '../../types';

type Props = {
  users: UserType[];
  transactions: TransactionType[];
};

export const TabNavigator: React.FC<Props> = ({transactions, users}) => {
  hooks.usePageColors('#fff', '#fff');

  const screen = stores.useTabStore((state) => state.screen);

  const renderScreens = () => {
    return (
      <>
        {screen === 'Dashboard' && (
          <Dashboard
            users={users}
            transactions={transactions}
          />
        )}
        {screen === 'Deposits' && <Deposits />}
        {screen === 'Loans' && <Loans />}
        {screen === 'More' && <More />}
        {screen === 'Notifications' && <Notification />}
      </>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
  };

  const renderBackground = () => {
    if (screen === TabScreens.NOTIFICATIONS) {
      return <components.Background />;
    }

    return null;
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderScreens()}
      {renderBottomTabBar()}
    </components.Screen>
  );
};
