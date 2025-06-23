import React from 'react';

import {svg} from '../../svg';
import {Routes} from '../../routes';
import {components} from '../../components';

export const SignUpAccountCreated: React.FC = () => {
  const renderBackground = () => {
    return <components.Background />;
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            height: '100%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <svg.AccountUserSvg style={{marginBottom: 30}} />
          <h2 style={{marginBottom: 20}}>Account created!</h2>
          <p
            className='t16'
            style={{marginBottom: 30}}
          >
            Your account had beed created successfully.
          </p>
          <components.Button
            label='Done'
            href={Routes.SIGN_IN}
            containerStyle={{width: '50%'}}
          />
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderContent()}
    </components.Screen>
  );
};
