import type {Metadata, Viewport} from 'next';
import {Source_Sans_3} from 'next/font/google';

import 'swiper/css';

import '../scss/_index.scss';

const sourceSans3 = Source_Sans_3({
  variable: '--source-sans-3',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeColor =
    typeof viewport.themeColor === 'string' ? viewport.themeColor : undefined;
  return (
    <html lang='en'>
      <head>
        <meta
          name='theme-color'
          content={themeColor}
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0'
        />
      </head>
      <body
        className={`${sourceSans3.variable}`}
        id='app'
      >
        {children}
      </body>
    </html>
  );
}
