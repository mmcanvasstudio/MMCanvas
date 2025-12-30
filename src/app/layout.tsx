import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'MMCanvas | Professional Food Photography Studio',
  description: 'MMCanvas is a professional food photography studio specializing in capturing delicious moments. Based in Hyderabad, India.',
  keywords: ['food photography', 'food styling', 'commercial photography', 'beverage photography', 'dessert photography', 'MMCanvas', 'Hyderabad'],
  authors: [{ name: 'MMCanvas Studio' }],
  openGraph: {
    title: 'MMCanvas Food Photography Studio',
    description: 'Professional food photography and creative studio capturing delicious moments',
    images: ['/og-image.jpg'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
