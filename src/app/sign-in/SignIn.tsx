'use client';

import Link from 'next/link';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

import {svg} from '../../svg';
import {hooks} from '../../hooks';
import {Routes} from '../../routes';
import {components} from '../../components';

export const SignIn: React.FC = () => {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  hooks.usePageColors('#fff', '#fff');

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return <components.Header />;
  };

  const renderContent = () => {
    const btnStyle: React.CSSProperties = {
      width: '100%',
      height: '40px',
      backgroundColor: '#FFD9C3',
      color: 'white',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    };

    return (
      <main className='scrollable container'>
        <section
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <h1 style={{marginBottom: 30}}>Welcome to Apitex!</h1>

          {/* INPUT FIELDS */}
          <section>
            <components.InputField
              inputType='email'
              placeholder='Enter your email'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              inputType='password'
              placeholder='Enter your password'
              containerStyle={{marginBottom: '14px'}}
            />
          </section>

          {/* REMEMBER ME */}
          <section
            className='row-c-sb'
            style={{marginBottom: 14}}
          >
            <div
              style={{gap: '10px'}}
              className='row-c clickable'
              onClick={() => setRememberMe(!rememberMe)}
            >
              <div
                style={{
                  border: '1px solid var(--main-color)',
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                }}
                className='flex-center'
              >
                {rememberMe && <svg.InputCheckSvg />}
              </div>
              <span className='t16'>Remember me</span>
            </div>
            <span
              className='t16 main-color clickable'
              onClick={() => router.push(Routes.FORGOT_PASSWORD)}
            >
              Lost your password?
            </span>
          </section>

          {/* SIGN IN BUTTON */}
          <section style={{marginBottom: 14}}>
            <components.Button
              label='Sign In'
              href={Routes.TAB_NAVIGATOR}
            />
          </section>

          {/* REGISTER */}
          <section>
            <p
              className='t16'
              style={{marginBottom: 20}}
            >
              No account?{' '}
              <Link
                href={Routes.SIGN_UP}
                style={{color: 'var(--main-color)'}}
              >
                Register now
              </Link>
            </p>
          </section>

          {/* SOCIAL NETWORKS */}
          <section>
            <span
              className='t16 block '
              style={{marginBottom: 14, display: 'block'}}
            >
              Log in with social networks
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '10px',
              }}
            >
              <div style={{...btnStyle}}>
                <svg.FacebookSvg />
              </div>
              <div style={{...btnStyle}}>
                <svg.TwitterSvg />
              </div>
              <div style={{...btnStyle}}>
                <svg.GoogleSvg />
              </div>
            </div>
          </section>
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
