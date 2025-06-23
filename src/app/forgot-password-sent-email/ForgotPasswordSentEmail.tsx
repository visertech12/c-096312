import React from 'react';

import {svg} from '../../svg';
import {Routes} from '../../routes';
import {components} from '../../components';

export const ForgotPasswordSentEmail: React.FC = () => {
  const renderBackground = () => {
    return <components.Background />;
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <section
          className='column-center'
          style={{height: '100%', alignItems: 'flex-start'}}
        >
          <svg.PadLockSvg style={{marginBottom: 30}} />
          <h2 style={{marginBottom: '20px'}}>
            Your password has <br /> been reset!
          </h2>
          <p
            className='t16'
            style={{marginBottom: '30px'}}
          >
            Qui ex aute ipsum duis. Incididunt adipisicing <br /> voluptate
            laborum
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
