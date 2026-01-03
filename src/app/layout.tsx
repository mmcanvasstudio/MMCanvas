import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ScrollToTop from '@/components/ui/scroll-to-top';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport = {
  themeColor: '#2081E2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'MMCanvas | Food & Product Photography Studio',
  description: 'MMCanvas is a food and product photography studio creating visual stories through light and composition. Specializing in tech, beauty, and food products. Based in Hyderabad, India.',
  keywords: ['product photography', 'food photography', 'commercial photography', 'tech photography', 'beauty product photography', 'MMCanvas', 'Hyderabad'],
  authors: [{ name: 'MMCanvas Studio' }],
  creator: 'MMCanvas Studio',
  publisher: 'MMCanvas Studio',
  metadataBase: new URL('https://mmcanvas.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MMCanvas Product Photography Studio',
    description: 'Food and product photography studio creating visual stories through light and composition',
    images: ['/images/products/EdgeController_ExpandView.webp'],
    type: 'website',
    locale: 'en_US',
    siteName: 'MMCanvas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MMCanvas Product Photography Studio',
    description: 'Food and product photography studio',
    images: ['/images/products/EdgeController_ExpandView.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
