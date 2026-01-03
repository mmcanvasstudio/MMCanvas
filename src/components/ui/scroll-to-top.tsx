'use client';

import { useState, useEffect } from 'react';

/**
 * Scroll to top button with progress indicator
 */
export default function ScrollToTop(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;
    
    const toggleVisibility = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (scrolled / docHeight) * 100;
          
          setScrollProgress(progress);
          setIsVisible(scrolled > 300);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-medium">
        <div
          className="h-full bg-accent transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-accent text-background rounded-full shadow-lg hover:bg-accent/90 transition-custom animate-fade-in"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
