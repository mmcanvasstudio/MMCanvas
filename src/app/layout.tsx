import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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
  title: 'MMCanvas | Professional Product Photography Studio',
  description: 'MMCanvas is a professional product photography studio specializing in tech, beauty, and luxury products. Based in Hyderabad, India.',
  keywords: ['product photography', 'commercial photography', 'tech photography', 'beauty product photography', 'luxury photography', 'MMCanvas', 'Hyderabad'],
  authors: [{ name: 'MMCanvas Studio' }],
  creator: 'MMCanvas Studio',
  publisher: 'MMCanvas Studio',
  metadataBase: new URL('https://mmcanvas.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MMCanvas Product Photography Studio',
    description: 'Professional product photography and creative studio capturing products with precision and style',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'en_US',
    siteName: 'MMCanvas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MMCanvas Product Photography Studio',
    description: 'Professional product photography and creative studio',
    images: ['/og-image.jpg'],
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
