'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { heroContent } from '@/constants/content';

/**
 * Hero section component with stunning background and introduction
 */
export default function HeroSection(): JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Hide scroll indicator only when scrolled past the hero section
      // Hero is min-h-screen, so hide when scrolled past viewport height
      const heroHeight = window.innerHeight - 200; // Hide when approaching end of hero
      setShowScrollIndicator(currentScrollY < heroHeight);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Update on resize
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/images/products/EdgeController_ExpandView.webp"
          alt="MMCanvas Studio Background"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #2081E2 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="container-custom text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Professional Photography Studio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            {heroContent.greeting}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-accent font-semibold mb-4 animate-fade-in">
            {heroContent.role}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-text-secondary mb-12 max-w-2xl mx-auto animate-fade-in">
            {heroContent.location}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            {heroContent.buttons.map((button) => (
              <Button
                key={button.label}
                href={button.href}
                variant={button.variant}
              >
                {button.label}
              </Button>
            ))}
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-text-secondary">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-text-secondary">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">5</div>
              <div className="text-sm text-text-secondary">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-text-secondary">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 transition-opacity duration-300">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-text-secondary uppercase tracking-wider">Scroll</span>
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
