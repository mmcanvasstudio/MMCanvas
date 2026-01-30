'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/theme-context';

/**
 * Theme toggle button component positioned at bottom left
 */
export default function ThemeToggle(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return <ThemeToggleButton />;
}

function ThemeToggleButton(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 left-8 z-50 p-4 bg-accent text-background rounded-full shadow-lg hover:bg-accent-secondary transition-custom group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        // Sun icon for light mode
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
      
      {/* Tooltip */}
      <span className="absolute left-full ml-3 px-3 py-2 bg-gray-dark text-foreground text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-custom pointer-events-none">
        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </span>
    </button>
  );
}
