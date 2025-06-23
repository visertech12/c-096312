'use client';

import Image from 'next/image';
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import {hooks} from '../hooks';
import {Routes} from '../routes';
import {components} from '../components';

const onboarding = [
  {
    id: 1,
    title1: 'Welcome to Apitex',
    title2: 'bank app!',
    image: '/assets/onboarding/01.png',
    description1: 'Manage your funds effortlessly.',
    description2: 'Transfer money with ease.',
  },
  {
    id: 2,
    title1: 'Get a new card in a',
    title2: 'few clicks!',
    image: '/assets/onboarding/02.png',
    description1: 'Your new card is just minutes away.',
    description2: 'Instant activation, zero hassle.',
  },
  {
    id: 3,
    title1: 'Easy payments all',
    title2: 'over the world!',
    image: '/assets/onboarding/03.png',
    description1: 'Global payments at your fingertips.',
    description2: 'Secure transactions, anytime.',
  },
];

export const Onboarding: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  hooks.usePageColors('#040325', '#040325');

  const renderCarousel = () => {
    return (
      <section
        className='flex-center'
        style={{width: '100%', height: '100%'}}
      >
        <Swiper
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
        >
          {onboarding.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{width: '100%', height: 'auto'}}
            >
              <Image
                src={item.image}
                alt='Onboarding'
                width={0}
                height={0}
                sizes='100vw'
                style={{width: '60%', height: 'auto', margin: '0 auto'}}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

  const renderDescription = () => {
    const currentItem = onboarding[currentSlideIndex];
    return (
      <section className='container'>
        <h1 style={{color: 'var(--white-color)'}}>{currentItem.title1}</h1>
        <h1 style={{color: 'var(--white-color)'}}>{currentItem.title2}</h1>
        <p
          className='t16'
          style={{marginTop: '14px', color: '#B4B4C6'}}
        >
          {currentItem.description1} <br />
          {currentItem.description2}
        </p>
      </section>
    );
  };

  const renderDots = () => {
    return (
      <section
        className='row-c container'
        style={{gap: '10px', marginTop: '8%', marginBottom: '8%'}}
      >
        {onboarding.map((item, index) => (
          <div
            key={item.id}
            style={{
              width: '20px',
              height: '2px',
              borderRadius: '4px',
              backgroundColor:
                currentSlideIndex === index
                  ? 'var(--white-color)'
                  : `rgba(255, 255, 255, 0.3)`,
            }}
          />
        ))}
      </section>
    );
  };

  const renderButton = () => {
    return (
      <section
        className='container'
        style={{padding: '0 20px 20px 20px'}}
      >
        <components.Button
          label='Get Started'
          containerStyle={{width: '50%'}}
          href={Routes.SIGN_IN}
          colorScheme='secondary'
        />
      </section>
    );
  };

  return (
    <components.Screen>
      {renderCarousel()}
      {renderDescription()}
      {renderDots()}
      {renderButton()}
    </components.Screen>
  );
};
