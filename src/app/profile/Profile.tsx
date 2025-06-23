'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {Routes} from '../../routes';
import {svg} from '../../svg';
import {components} from '../../components';

const menu = [
  {
    id: 1,
    title: 'Personal Info',
    icon: <svg.ProfileUserSvg />,
    route: Routes.EDIT_PERSONAL_INFO,
  },
  {
    id: 2,
    title: 'Notifications',
    icon: <svg.MessageCircelSvg />,
    route: null,
  },
  {
    id: 3,
    title: 'Face ID',
    icon: <svg.FaceIDSvg />,
    route: null,
  },
  {
    id: 4,
    title: 'Language',
    icon: <svg.TranslateSvg />,
    route: '',
  },
];

export const Profile: React.FC = () => {
  const [switcherState, setSwitcherState] = useState<{[key: string]: boolean}>(
    {},
  );

  const handleToggle = (id: string) => {
    setSwitcherState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Profile'
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <div style={{paddingTop: '10%'}}>
          {/* USER INFO */}
          <section style={{marginBottom: 30}}>
            <Image
              src='https://george-fx.github.io/apitex_api/assets/users/01.png'
              width={100}
              height={100}
              alt='Profile'
              className='center'
              style={{marginBottom: 14}}
            />
            <h4
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                marginBottom: 4,
              }}
            >
              Briley Henderson
            </h4>
            <span
              style={{textAlign: 'center', display: 'block'}}
              className='t16'
            >
              +17 123 456 7890
            </span>
          </section>

          {/* PROFILE NAVIGATION */}
          <section>
            <ul>
              {menu.map((item, index, array) => {
                const isLast = index === array.length - 1;

                return (
                  <li
                    key={item.id}
                    style={{marginBottom: isLast ? 0 : 8}}
                  >
                    <Link
                      href={item.route || '#'}
                      style={{
                        backgroundColor: '#FFF7F2',
                        width: '100%',
                        padding: 10,
                        paddingRight: 20,
                        borderRadius: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}
                      onClick={(e) => {
                        if (!item.route || item.route === '') {
                          e.preventDefault();
                          handleToggle(item.id.toString());
                        }
                      }}
                    >
                      {item.icon}
                      <h5 style={{marginRight: 'auto'}}>{item.title}</h5>
                      {(item.route || item.route === '') && (
                        <svg.RightArrowSvg />
                      )}
                      {!(item.route || item.route === '') && (
                        <components.Switcher
                          active={switcherState[item.id] || false}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* BUTTON */}
          <section>
            <components.Button
              label='Log out'
              href={Routes.SIGN_IN}
              colorScheme='secondary'
              style={{marginTop: 20}}
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
