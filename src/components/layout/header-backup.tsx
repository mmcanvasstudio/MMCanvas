'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Header component - simplified without navigation
 */
export default function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-custom ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-gray-medium' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-center h-20">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-accent transition-custom">
            MMCanvas
          </Link>
        </div>
      </div>
    </header>
  );
}
