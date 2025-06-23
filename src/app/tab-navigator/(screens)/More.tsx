import React from 'react';
import Link from 'next/link';

import {Routes} from '../../../routes';
import {svg} from '../../../svg';
import {components} from '../../../components';

const menu = [
  {
    id: 1,
    title: 'Add new card',
    icon: <svg.CardMenuSvg />,
    route: Routes.OPEN_NEW_CARD,
  },
  {
    id: 2,
    title: 'Create invoice',
    icon: <svg.MenuEditSvg />,
    route: Routes.CREATE_INVOICE,
  },
  {
    id: 3,
    title: 'Statistics',
    icon: <svg.BarSvg />,
    route: Routes.STATISTICS,
  },
  {
    id: 4,
    title: 'Scanner QR',
    icon: <svg.MaximizeSvg />,
    route: '',
  },
  {
    id: 5,
    title: 'FAQ',
    icon: <svg.HelpCircleSvg />,
    route: Routes.FAQ,
  },
  {
    id: 6,
    title: 'Support',
    icon: <svg.MessageSvg />,
    route: '',
  },
  {
    id: 7,
    title: 'Charity',
    icon: <svg.HeartSvg />,
    route: '',
  },
  {
    id: 8,
    title: 'Privacy policy',
    icon: <svg.FIleTextSvg />,
    route: Routes.PRIVACY_POLICY,
  },
];

export const More: React.FC = () => {
  const renderContent = () => {
    return (
      <main
        style={{marginTop: 40, marginBottom: 20}}
        className='container'
      >
        <h2 style={{marginBottom: 20}}>More</h2>
        <ul
          style={{
            width: '100%',
            display: 'flex',
            gap: 11,
            flexWrap: 'wrap',
          }}
        >
          {menu.map((item, index, array) => {
            return (
              <li
                key={item.id}
                style={{flex: '1 1 calc(50% - 11px)'}}
              >
                <Link
                  href={item.route ?? ''}
                  style={{
                    padding: 14,
                    backgroundColor: '#FFF6F2',
                    borderRadius: 10,
                    cursor: 'pointer',
                    userSelect: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                  }}
                >
                  {item.icon}
                  <h5 className='number-of-lines-1'>{item.title}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
  };

  return <components.Screen>{renderContent()}</components.Screen>;
};
