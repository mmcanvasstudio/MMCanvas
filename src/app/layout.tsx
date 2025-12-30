import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Bryan Minear | Michigan Landscape Photographer',
  description: 'Portfolio of Bryan Minear, Fujifilm Ambassador and atmospheric landscape photographer based in Michigan.',
  keywords: ['photography', 'landscape', 'portfolio', 'Fujifilm', 'Michigan', 'atmospheric'],
  authors: [{ name: 'Bryan Minear' }],
  openGraph: {
    title: 'Bryan Minear Photography',
    description: 'Atmospheric landscape photography from Michigan',
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
