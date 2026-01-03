'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './navigation';

/**
 * Header component with sticky navigation
 */
export default function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-custom ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-gray-medium' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-accent transition-custom">
            MMCanvas
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
