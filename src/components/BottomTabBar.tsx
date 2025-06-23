'use client';

import React from 'react';

import {stores} from '../stores';
import {svg} from '../svg';
import {TabScreens} from '../routes';

const tabs = [
  {
    id: 1,
    name: TabScreens.DASHBOARD,
    icon: svg.DashboardTabSvg,
  },
  {
    id: 2,
    name: TabScreens.DEPOSITS,
    icon: svg.DepositTabSvg,
  },
  {
    id: 3,
    name: TabScreens.LOANS,
    icon: svg.LoanTabSvg,
  },
  {
    id: 4,
    name: TabScreens.NOTIFICATIONS,
    icon: svg.NotificationTabSvg,
  },
  {
    id: 5,
    name: TabScreens.MORE,
    icon: svg.MoreTabSvg,
  },
];

export const BottomTabBar: React.FC = () => {
  const {screen, setScreen} = stores.useTabStore();

  return (
    <nav style={{padding: 20}}>
      <div
        style={{
          borderRadius: 14,
          backgroundColor: 'var(--main-dark)',
        }}
        className='flex-space-around'
      >
        {tabs.map((tab) => {
          const iconColor =
            screen === tab.name ? 'var(--main-color)' : 'var(--white-color)';
          return (
            <button
              key={tab.id}
              style={{paddingTop: 20, paddingBottom: 20}}
              onClick={() => setScreen(tab.name)}
            >
              <tab.icon
                key={tab.id}
                color={iconColor}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
