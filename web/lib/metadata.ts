import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
  icons: {
    icon: [
      { url: '/assets/alperkaan-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/alperkaan-logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/alperkaan-logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/alperkaan-logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/alperkaan-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/assets/alperkaan-logo.png',
  },
};

