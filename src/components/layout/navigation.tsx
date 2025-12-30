'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigationItems } from '@/constants/content';

/**
 * Navigation component with mobile menu
 */
export default function Navigation(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-custom"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-foreground transition-transform ${
            mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-foreground transition-opacity ${
            mobileMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-foreground transition-transform ${
            mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-gray-medium shadow-lg">
          <ul className="py-4">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-6 py-3 text-base font-medium text-foreground hover:bg-gray-dark hover:text-accent transition-custom"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
